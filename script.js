let gameData = { 
    playersCount: 0,
    topic: '',
    questionsCount: 3 
};
let playerButtons = [
    document.getElementById('btn-player1'),
    document.getElementById('btn-player2'),
    document.getElementById('btn-player3'),
    document.getElementById('btn-player4')
];

playerButtons[0].addEventListener('click', function(){
    gameData.playersCount = 1;
    console.log(gameData);
}) 
playerButtons[1].addEventListener('click', function(){
    gameData.playersCount = 2;
    console.log(gameData);
})
playerButtons[2].addEventListener('click', function(){
    gameData.playersCount = 3;
    console.log(gameData);
})
playerButtons[3].addEventListener('click', function(){
    gameData.playersCount = 4;
    console.log(gameData);
})

let startButton = document.getElementById('next-btn');
let screen1 = document.getElementById('screen-1');
let screen2 = document.getElementById('screen-2');
startButton.addEventListener('click', function() {
    screen1.style.display = 'none';
    screen2.style.display = 'block';
});
let previousButton = document.getElementById('previous-btn');
previousButton.addEventListener('click', function() {
    screen2.style.display = 'none';
    screen1.style.display = 'block';
});

let categorySelect = document.getElementById('category-select');
categorySelect.addEventListener('change', function(){
    gameData.topic = categorySelect.value
    console.log(gameData)
})

let questionCountSelect = document.getElementById('number-of-questions');
questionCountSelect.addEventListener('change', function(){
    gameData.questionsCount = Number(questionCountSelect.value)
    console.log(gameData)
})

let startquizButton = document.getElementById('start-quiz-btn');
let screen3 = document.getElementById('screen-3');
startquizButton.addEventListener('click', function() {
    screen2.style.display = 'none';
    screen3.style.display = 'block';
});
