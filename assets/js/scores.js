//Display the scores 

let startScreen = document.getElementById('highscores');

//get the scores from storage
let highScores = JSON.parse(localStorage.getItem('score'));

//Sort by high to low
var scoreData = highScores.sort((a, b) => {
    if (a.userScore > b.userScore) {
        return -1;
    }
});

//IIterate through eacch item
for(var i = 0; i < scoreData.length; i++) {
    let list = document.createElement('li');
    list.innerHTML = `${scoreData[i].user} - ${scoreData[i].userScore}`;
    startScreen.append(list);
};

