// Event listener that listens to the start quiz button
let startButton = document.getElementById('start');
startButton.addEventListener("click", startQuiz);
//set question numbet to 0
let questionNumber = 0;

// When start quiz is clicked, hide start screen, show question screen
let startScreen = document.getElementById('start-screen');
let questionsScreen = document.getElementById('questions');
let endScreen = document.getElementById('end-screen');

//Start timer
let timer = 75;
let timeInterval; // variable for interval
let timerPanel = document.getElementById("time");

//get question-title and choices element 
let questionTitle = document.getElementById('question-title');
let questionChoices = document.getElementById('choices');

//feedback section
let feedback =  document.createElement('p');
let finalScore = document.getElementById('final-score');
let currentScore = 0;
let scoresList = [];


if (localStorage.getItem("score")){
    scoresList = JSON.parse(localStorage.getItem("score"));
}

let submit = document.getElementById('submit');
//Get the input value
let initials = document.getElementById('initials');
// Length from HTML attribute of data-max (initials length)
const maxInitials = initials.getAttribute('data-max');

//Audios
let correctAudio = document.getElementById('correctAudio');
let incorrectAudio = document.getElementById('incorrectAudio');


//functions are listed below
function startQuiz(event){
    //Hide the start Screen
    startScreen.classList.add('hide');
    //Make questions Screen Visible
    questionsScreen.classList.remove('hide');    

    //start timer and ask Question
    updateTimer();
    askQuestions(questionNumber);
}

//Ask questions, start from question 1
function askQuestions(questionNumber){
    //Empty the choices prior to question
    questionChoices.innerText = '';
    questionTitle.innerText = '';
    //ask questions
    questionTitle.innerText = questions[questionNumber].question;

    //Created new div for buttons section
    var buttonArea = document.createElement('div');
    questionChoices.append(buttonArea);

    //display options for the given question
    for(var i = 1 ; i < 5 ; i++){
        //created 4 variables for buttons (option1, option2, option3, option4)
        var currentOption = `option${i}`;
        //Each variable will have new button element
        currentOption =  document.createElement('button');
        //Add text to each button
        currentOption.innerText = `${i}. ` + questions[questionNumber].choices[i-1];
        //Add to the DOM
        buttonArea.appendChild(currentOption);
    }

    //this function checks if chosen answer is correct
    userAnswer(buttonArea, questionNumber);
}

//Check which option the user chooses
// Check which option the user chooses
function userAnswer(buttonArea, questionNumber) {
    let chosenAnswer;

    // Listen for the user answer
    buttonArea.addEventListener('click', (event) => {
        if (event.target.tagName.toLowerCase() === 'button') {
            chosenAnswer = event.target.innerText;
            checkAnswer(chosenAnswer, questionNumber);
        }
    }, );
}


//Check answer and manage answer feedback
function checkAnswer(chosenAnswer, questionNumber){
    //variable to save outcome
    let outcome;

        //First 3 characters have been removed as they include the option number in innerText
    if (chosenAnswer.slice(3) === questions[questionNumber].correct_answer){
        //Correct Answer
        feedback.innerText = "Correct!";
        correctAudio.play();
        outcome = true;
    } else {
        feedback.innerText = "Wrong!";
        incorrectAudio.play();
        outcome = false;
        //reduce 10 secondss
        updateTimer(true);
    }
    feedback.classList.add('feedback')
    questionsScreen.append(feedback);

    //hide feedback after 1 seconds using set timeout
    setTimeout(()=>{
        feedback.remove();
    },1500);

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
    if (questionNumber < questions.length - 1){
        questionNumber++
        askQuestions(questionNumber);
    } else {
        //ask next question
        showEndScreen();
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
    timerPanel.innerText = "0";

    //If user decides to save the score  
    submit.addEventListener("click", (event)=>{
    
        if(!initials.value){
            //Highlight the field
            initials.style.borderColor = "red";
            initials.focus();
            initials.setAttribute("placeholder", "Enter your initials")
        } else if (initials.value.length > maxInitials) {
            initials.style.borderColor = "red";
            initials.focus();
            initials.value = "";
            initials.setAttribute("placeholder", "Max 3 characters")
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


function updateTimer(update) {
    if (timer < 1) {
        // Stop the quiz on 0 - showEndScreen
        clearInterval(timeInterval);
        showEndScreen();
        return;
    }

    if (update) {
        clearInterval(timeInterval);
        if (timer >= 10) {
            timer -= 10;
        } else {
            showEndScreen();
            return;
        }
    }

    timeInterval = setInterval(runner, 1000);
    timerPanel.innerHTML = timer;

    function runner() {
        if (timer < 1) {
            // Stop the quiz on 0 - showEndScreen
            clearInterval(timeInterval);
            showEndScreen();
        } else {
            timer--;
            timerPanel.innerHTML = timer;
        }
    }
}
