// import { prompt } from 'inquirer';
import inquirer from 'inquirer'
import { writeFile } from 'fs';
// import fs from 'fs'
import Shapes from "./lib/shapes.js";

const { Triangle, Square, Circle } = Shapes;

function writeToFile(fileName, responses){
    // initiate the file as an empty string
    let svgInput = ''
//    sets the height and width of the logo container
    svgInput = 
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">'
    svgInput += '<g>'
    svgInput += `${responses.shape}`
    
    // if else that checks input from the questions and adds to the svgInput string
    let shapeChoice
    if (responses.shape == 'Square'){
        shapeChoice = new Square()
        svgInput += `<rect x="73" y="40" width="160" height="160" fill="${responses.bgColor}"/>`
    } else if (responses.shape == 'Circle'){
        shapeChoice = new Circle()
        svgInput += `<circle cx="150" cy="115" r="80" fill="${responses.bgColor}"/>`
    } else if (responses.shape == 'Triangle'){
        shapeChoice = new Triangle()
        svgInput += `<polygon points="150, 18 244, 182 56, 182" fill="${responses.bgColor}"/>`
    }
    // initializes the text 
    svgInput+= `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${responses.textColor}">${responses.text}</text>`;
 
  svgInput += "</g>";
  
  svgInput += "</svg>";

  
  writeFile(fileName, svgInput, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });

}


const questions = [
    {
        type: "checkbox",
        name: "shape",
        message:"Please select what shape you would like your logo to be.",
        choices: ['Circle','Triangle','Square']
    },
    {
        type: 'input',
        name: 'bgColor',
        message: 'What color would you like the background of your shape to be? Type the name of a color or a hexadecimal code.'

        
    },
    {
        type: 'input',
        name: 'text',
        message: 'What would like your logo to say? (Please choose 3 letters).'

    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like your text to be? Type the name of a color or a hexadecimal code.'
    }
]

function init() {
    inquirer.prompt(questions).then((responses) =>{
        if(responses.text.length > 3){
            console.log("Please choose no more than 3 characters for your text")
        } else {
            writeToFile("logo.svg",responses)
        }
        
    })
}
init()