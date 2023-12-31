function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [How to Use](#usage)
  - [Collaborators](#collaborators)
  - [License Used](#license)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description
  
  ${data.description}

  ## Installation
  
  ${data.installation}

  ## How to Use
  
  ${data.usage}

  ## Collaborators
  
  ${data.collaborators}

  ## License Used
  
  ${data.license}

  ## Tests

  ${data.tests}

  ## Questions

  github.com/${data.username}

  ${data.email}

  Please reach out to me via GitHub or via my email above if you have any further questions!
`;
}

module.exports = generateMarkdown;