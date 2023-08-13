function generateMarkdown(data) {
  return `
  # ${data.title}

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
`;
}

module.exports = generateMarkdown;