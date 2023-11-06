//Display the scores 

let startScreen = document.getElementById('highscores');

//get the scores from storage
let highScores = JSON.parse(localStorage.getItem('score'));

for(var i = 0; i < highScores.length; i++) {
    let list = document.createElement('li');
    list.innerHTML = `${highScores[i].user}`;
    startScreen.append(list);
};