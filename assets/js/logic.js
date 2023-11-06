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

    //set question numbet to 0
    let questionNumber = 0;
    askQuestions(questionNumber);
}

function askQuestions(questionNumber){
    //get question-title element
    let questionTitle = document.getElementById('question-title');
    let questionChoices = document.getElementById('choices');

    //ask questions
    questionTitle.innerText = questions[questionNumber].question; 

    //create ol
    for(var i = 1 ; i < 5 ; i++){
        //created 4 variables for buttons (option1, option2, option3, option4)
        var currentOption = `option${i}`;
        //Each variable will have new button element
        currentOption =  document.createElement('button');
        //Add text to each button
        currentOption.innerText = `${i}. ` + questions[questionNumber].choices[i-1];
        //Add to the DOM
        questionChoices.appendChild(currentOption);
    }

    userAnswer(questionChoices, questionNumber);
}

//Check which option the user chooses
function userAnswer(questionChoices, questionNumber){
        let chosenAnswer;
        //Listen for the user answer
        questionChoices.addEventListener('click', function(event) {
            if (event.target.tagName.toLowerCase() === 'button') {
                chosenAnswer = event.target.innerText
                checkAnswer(chosenAnswer, questionNumber);
                //console.log('Button Clicked ' + event.target.innerText);
            }
        });
}

function checkAnswer(chosenAnswer, questionNumber){
    feedback =  document.createElement('p');
    //First 3 characters have been removed as they include the option number in innerText
    if (chosenAnswer.slice(3) === questions[questionNumber].correct_answer){
        //Correct Answer
        feedback.innerText = "Correct!";   
    } else {
        feedback.innerText = "Wrong!";
    }
    feedback.classList.add('feedback')
    questionsScreen.append(feedback);
}