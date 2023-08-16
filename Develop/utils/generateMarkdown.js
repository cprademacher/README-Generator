function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents

  ${data.contents}

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