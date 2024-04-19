
//Initialization of the variable in textfield
let userInput = document.getElementById('displayInput');

//Initialization of the variable in every buttons
let buttons = document.querySelectorAll('button');

//Empty string
let string = "";

//Appending the user input every click of the button
let appendText = Array.from(buttons);

//For each loop to append the text in the textfield
appendText.forEach(button => {

    //Trigger the button to output in the textfield
    button.addEventListener('click', (e) => {
        switch (e.target.innerHTML) {

            //Result of the user input
            case '=':
                string = eval(string);
                userInput.value = string;
                break;
            
            //Resetting the calculator from the start
            case 'AC':
                string = "";
                userInput.value = string;
                break;

            //Division
            case '÷':
                string += '/';
                userInput.value = string;
                break;
            
            //Multiplication
            case 'x':
                string += '*';
                userInput.value = string;
                break;

            //Addition and Subtraction
            default:
                string += e.target.innerHTML;
                userInput.value = string;
                break;
        }
    });
});