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
let finalScore = document.getElementById('final-score');
let currentScore = 0;
let scoresList = [];
if (localStorage.getItem("score")){
    scoresList.push(localStorage.getItem("score"));
}



let submit = document.getElementById('submit');
//Get the input value
let initials = document.getElementById('initials');

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

//Ask questions, start from question 1
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

//Check answer and manage answer feedback
function checkAnswer(chosenAnswer, questionNumber){
    //variable to save outcome
    let outcome;
    //First 3 characters have been removed as they include the option number in innerText
    if (chosenAnswer.slice(3) === questions[questionNumber].correct_answer){
        //Correct Answer
        feedback.innerText = "Correct!";
        outcome = true;
    } else {
        feedback.innerText = "Wrong!";
        outcome = false;
    }
    feedback.classList.add('feedback')
    questionsScreen.append(feedback);

    //hide feedback after 1 seconds using set timeout
    setTimeout(()=>{
        feedback.remove();
    },1000);

    //Save the scores
    processScore(questionNumber, outcome);
}

//Process Score and ask next question
function processScore(questionNumber, outcome) {
    //save score
    if(outcome){
        currentScore += 1;
    }
    //Check if more questions are left
    if (questionNumber >= 2){
        showEndScreen();
    } else {
        //ask next question
        askQuestions(questionNumber+1);
    }
}

//Show end screen after last question or timeout
function showEndScreen(){
    //Hide the start Screen
    questionsScreen.classList.add('hide');
    //Display end Screen
    endScreen.classList.remove('hide');
    //Display Final Score
    finalScore.innerText = currentScore;

    //If user decides to save the score  
    submit.addEventListener("click", (event)=>{
        
        console.log(initials.value);
        if(!initials.value){
            //Highlight the field
            initials.style.borderColor = "red";
            initials.focus();
            initials.setAttribute("placeholder", "Enter your initials")
        } else {
            
            //Set score
            let scoreObject = {user: initials.value, userScore: currentScore}
            scoresList.push(scoreObject);
            localStorage.setItem('score', JSON.stringify(scoresList));
            initials.value = "";

            //Go to highscore page
            window.location.href = "highscores.html";
        }
        
    });
}