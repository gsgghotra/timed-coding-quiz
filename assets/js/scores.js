//Display the scores 
let highScoresScreen = document.getElementById('highscores');

//get the scores from storage
let highScores = JSON.parse(localStorage.getItem('score'));

//EventListener for clear highScore buttons
let clearHighScores = document.getElementById('clear');

clearHighScores.addEventListener("click" ,(event)=>{
    //Delete the scores
    localStorage.removeItem('score');
    //Clear the list from DOM
    highScoresScreen.innerText = "";

});

if (highScores){
    //Sort scores by high to low
    var scoreData = highScores.sort((a, b) => {
        if (a.userScore > b.userScore) {
            return -1;
        }
    });

    //Iterate through eacch item to display scores
    for(var i = 0; i < scoreData.length; i++) {
        let list = document.createElement('li');
        list.innerHTML = `${scoreData[i].user} - ${scoreData[i].userScore}`;
        highScoresScreen.append(list);
    };

}