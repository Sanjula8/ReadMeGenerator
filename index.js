const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

function userQuestions() {
	return inquirer.prompt([
		{
			type: "input",
			message: "What is the name of your project?",
			name: "projectName"
		},
		{
			type: "input",
			message: "Give a brief description of your project.",
			name: "Description"
		},
		{
			type: "input",
			message: "What is your Github email?",
			name: "gitEmail"
		},
		{
			type: "input",
			message: "What is your Github username?",
			name: "gitUsername"
		}
	]);
}

async function init() {
	try {
		var userAnswers = await userQuestions();
		console.log(userAnswers);
		var userMD = await generateReadMe(userAnswers);

		await writeFileAsync("NEWREADME.md", userMD, "utf8");
	} catch (err) {
		console.log(err);
	}
}

init();
generateReadMe();

// const questions = [];

// function writeToFile(fileName, data) {}
