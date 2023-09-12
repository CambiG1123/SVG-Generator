const fs = require('fs')
const inquirer = require('inquirer')
const {Triangle, Square, Circle} = require("./lib/shapes")




const questions = [
    {
        type: "Checkbox",
        name: "shape",
        message:"Please select what shape you would like your logo to be.",
        choices: ['Circle','Triangle',"Square"]
    },
    {
        type: 'input',
        name: 'BG-color',
        message: 'What color would you like the background of your shape to be? Type the name of a color or a hexadecimal code.'

        
    },
    {
        type: 'input',
        name: 'text',
        message: 'What would like your logo to say? (Please choose 3 letters).'

    },
    {
        type: 'input',
        name: 'text-color',
        message: 'What color would you like your text to be? Type the name of a color or a hexadecimal code.'
    }
]

