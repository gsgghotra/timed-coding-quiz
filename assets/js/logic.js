// Event listener that listens to the start quiz button
let startButton = document.getElementById('start');
startButton.addEventListener("click", startQuiz);

// When start quiz is clicked, hide start screen, show question screen
let startScreen = document.getElementById('start-screen');
let questionsScreen = document.getElementById('questions');
let endScreen = document.getElementById('end-screen');

//functions are listed below
function startQuiz(event){
    console.log("Start button clicked");
    //Hide the start Screen
    startScreen.classList.add('hide');
    //Make questions Screen Visible
    questionsScreen.classList.remove('hide');
    askQuestions(0);
}

function askQuestions(){
    //get question-title element
    let questionTitle = document.getElementById('question-title');
    let questionChoices = document.getElementById('choices');

    //ask questions
    questionTitle.innerText = questions[0].question; 

    //create ol
    for(var i = 1 ; i < 5 ; i++){
        //created 4 variables for buttons (option1, option2, option3, option4)
        var currentOption = `option${i}`;
        //Each variable will have new button element
        currentOption =  document.createElement('button');
        //Add text to each button
        currentOption.innerText = `${i}. ` + questions[0].choices[i-1];
        //Add to the DOM
        questionChoices.appendChild(currentOption);

    } 
    questionChoices.addEventListener('click', function(event) {
        if (event.target.tagName.toLowerCase() === 'button') {
            console.log('Button Clicked ' + event.target.innerText);
        }
    });
}