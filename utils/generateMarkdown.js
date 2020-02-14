function generateReadMe(answers) {
	return `
## Project Title
${answers.projectTitle}
## Project Description
${answers.Description}

## Table of Contents:
[Installation](#installation)
[Usage](#usage)
[Credits](#credits)
[License](#license)

## Installation

## Usage
[Provide instructions and examples to use.]

## Credits
[List your collaborators.]

## License
${answers.License}

## Badges

## GitHub Email
${answers.gitEmail}
## GitHub Username
${answers.gitUsername}




`;
}

module.exports = generateReadMe;
