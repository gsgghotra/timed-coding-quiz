// Event listener that listens to the start quiz button
let startButton = document.getElementById('start');
startButton.addEventListener("click", startQuiz);

// When start quiz is clicked, hide start screen, show question screen
let startScreen = document.getElementById('start-screen');
let questionsScreen = document.getElementById('questions');
let endScreen = document.getElementById('end-screen');

//Each question can be saved in array of objects
questions = [
    {
        question: "Who is the best player of all time?",
        answers: ['Ronaldo', 'Messi', 'Zidane', 'Ronaldinho'],
        correct_answer : 'Ronaldo'
    }
]

//functions are listed below
function startQuiz(event){
    console.log("Start button clicked");
    //Hide the start Screen
    startScreen.classList.add('hide');
    //Make questions Screen Visible
    questionsScreen.classList.remove('hide');
    askQuestions()
}

function askQuestions(){
    //get question-title element
    let questionTitle = document.getElementById('question-title');
    let questionChoices = document.getElementById('choices');

    //ask questions
    questionTitle.innerText = questions[0].question; 
}