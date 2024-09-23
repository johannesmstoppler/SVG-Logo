var inquirer = require('inquirer');
const fs = require('node:fs');

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
        let content
        if (answers.shape === "square") {
            content = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

<rect x="30" y="30" width="300" height="300" fill="${answers.shapecolor}"/>

  <text x="160" y="125" font-size="60" text-anchor="middle" fill="${answers.textcolor}">${answers.text}</text>

</svg>
`
        }
        if (answers.shape === "circle") {
            content = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

            <circle cx = "150" cy = "100" r = "80" fill = "${answers.shapecolor}" />

                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textcolor}">${answers.text}</text>

</svg > `;

        }

        if (answers.shape === "triangle") {
            content = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="600" height="500">

<polygon points="250,60 100,400 400,400" x="200" y="200" fill="${answers.shapecolor}"/>

  <text x="200" y="300" font-size="60" text-anchor="center" fill="${answers.textcolor}">${answers.text}</text>

</svg>`
        }
        fs.writeFile('./examples/shapes.svg', content, err => {
            if (err) {
                console.error(err);
            } else {
            }
        })
    })

    // module export
    // .catch((error) => {
    //     if (error.isTtyError) {
    //         // Prompt couldn't be rendered in the current environment
    //     } else {
    //         // Something else went wrong
    //     }
    // });