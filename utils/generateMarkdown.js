function generateReadMe(answers) {
	return `
## Project Name
${answers.projectName}
## Project Description
${answers.Description}
#GitHub Email
${answers.gitEmail}
#GitHub Username
${answers.gitUsername}
`;
}

module.exports = generateMarkdown;
