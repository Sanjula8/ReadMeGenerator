const inquirer = require("inquirer");
// const axios = require("axios");
const fs = require("fs");
const util = require("util");
const generateReadMe = require("./utils/generateMarkdown");
// require("dotenv").config();

const writeFileAsync = util.promisify(fs.writeFile);

function userQuestions() {
	return inquirer.prompt([
		{
			type: "input",
			message: "What is the title of your project?",
			name: "projectTitle"
		},
		{
			type: "input",
			message: "Give a brief description of your project.",
			name: "Description"
		},
		{
			type: "list",
			message: "What is the licensing of your project?",
			name: "License",
			choices: ["MIT", "GPL", "Apache License 2.0", "BSD"]
		},
		{
			type: "input",
			message: "What is your Github username?",
			name: "gitUsername"
		},
		{
			type: "input",
			message: "Please enter your GitHub Email:",
			name: "gitEmail"
		}
	]);
}

userQuestions();

init();

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

// generateReadMe();

// const questions = [];

// function writeToFile(fileName, data) {}
