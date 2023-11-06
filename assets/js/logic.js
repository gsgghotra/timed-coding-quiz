// Event listener that listens to the start quiz button
let startButton = document.getElementById('start');
startButton.addEventListener("click", startQuiz);

// When start quiz is clicked, hide start screen, show question screen
let startScreen = document.getElementById('start-screen');
let questionsScreen = document.getElementById('questions');
let endScreen = document.getElementById('end-screen');

//get question-title and choices element 
let questionTitle = document.getElementById('question-title');
let questionChoices = document.getElementById('choices');

//feedback section
let feedback =  document.createElement('p');

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
    //Empty the choices prior to question
    questionChoices.innerText = '';
    //ask questions
    questionTitle.innerText = questions[questionNumber].question; 

    //display options for the given question
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
    //this function checks if chosen answer is correct
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
        }
    });

}

function checkAnswer(chosenAnswer, questionNumber){

    //Check Answer
    //First 3 characters have been removed as they include the option number in innerText
    if (chosenAnswer.slice(3) === questions[questionNumber].correct_answer){
        //Correct Answer
        feedback.innerText = "Correct!";   
    } else {
        feedback.innerText = "Wrong!";
    }
    feedback.classList.add('feedback')
    questionsScreen.append(feedback);

    //hide feedback after 1 seconds using set timeout
    setTimeout(()=>{
        feedback.remove();
    },1000);

    //Save the scores
    processScore(questionNumber)
   
}

function processScore(questionNumber) {
    //Calculate and save score

    //Check if more questions are left
    if (questionNumber >= 2){
        //Display end Screen
        //Hide the start Screen
        questionsScreen.classList.add('hide');
        //Make questions Screen Visible
        endScreen.classList.remove('hide');
    } else {
        //ask next question
        askQuestions(questionNumber+1);
    }
    
}