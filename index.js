var inquirer = require('inquirer');
inquirer
  .prompt([
    {
        type: "input",
        name: "text",
        message: "Please enter three characters",
    },
    {
        type: "input",
        name: "textcolor",
        message: "PLease enter a color option",
    },
    {
        type: "list",
        name: "shape",
        message: "Please choose a shape",
        choices: ["triangle", "square", "circle"],
    },
    {
        type: "input",
        name: "shapecolor",
        message: "Please enter a color option",
    }
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });