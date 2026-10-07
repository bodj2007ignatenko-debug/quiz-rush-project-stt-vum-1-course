let gameData = { 
    playersCount: 1,
    topic: '',
    questionsCount: 3 
};
let playerButtons = [
    document.getElementById('btn-player1'),
    document.getElementById('btn-player2'),
    document.getElementById('btn-player3'),
    document.getElementById('btn-player4')
];
playerButtons[0].style.backgroundColor = "lightgreen";

playerButtons[0].addEventListener('click', function(){
    gameData.playersCount = 1;
    for (let i = 0; i < playerButtons.length; i++) {
    playerButtons[i].style.backgroundColor = "";
}
playerButtons[0].style.backgroundColor = "lightgreen";
    console.log(gameData);
}) 
playerButtons[1].addEventListener('click', function(){
    gameData.playersCount = 2;
    for (let i = 0; i < playerButtons.length; i++) {
    playerButtons[i].style.backgroundColor = "";
}
playerButtons[1].style.backgroundColor = "lightgreen";
    console.log(gameData);
})
playerButtons[2].addEventListener('click', function(){
    gameData.playersCount = 3;
    for (let i = 0; i < playerButtons.length; i++) {
    playerButtons[i].style.backgroundColor = "";
}
playerButtons[2].style.backgroundColor = "lightgreen";
    console.log(gameData);
})
playerButtons[3].addEventListener('click', function(){
    gameData.playersCount = 4;
    for (let i = 0; i < playerButtons.length; i++) {
    playerButtons[i].style.backgroundColor = "";
}
playerButtons[3].style.backgroundColor = "lightgreen";          
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

let question = [
    {
        question: "What does the a tag define in HTML?",
        category: "html",
        answers: ["A hyperlink", "A paragraph", "An image", "A section"],
        correct: 0
    },
    {
        question: "Which tag is used to create an ordered list?",
        category: "html",
        answers: ["<ul>", "<ol>", "<li>", "<dl>"],
        correct: 1
    },
    {
        question: "Which HTML attribute is used to provide an alternative text for an image?",
        category: "html",
        answers: ["title", "src", "alt", "href"],
        correct: 2
    },
    {
        question: "What is the correct HTML element for the largest heading?",
        category: "html",
        answers: ["<head>", "<h6>", "<heading>", "<h1>"],
        correct: 3 
    },
    {
        question: "Which tag is used to define an input field within a form?",
        category: "html",
        answers: ["<input>", "<form>", "<textarea>", "<button>"],
        correct: 0
    },
    {
        question: "Which CSS property is used to change the text color?",
        category: "css",
        answers: ["font-color", "text-color", "color", "background-color"],
        correct: 2
    },
    {
        question: "How do you select an element with id header in CSS?",
        category: "css",
        answers: [".header", "#header", "header", "*header"],
        correct: 1
    },
    {
        question: "Which CSS property controls the size of text?",
        category: "css",
        answers: ["font-style", "text-size", "font-size", "text-style"],
        correct: 2  
    },
    {
        question: "What does the box model property padding do?",
        category: "css",
        answers: ["Space outside border", "Space inside border", "Border thickness", "Element width"],
        correct: 1
    },
    {
        question: "Which value of display makes block elements sit horizontally?",
        category: "css",
        answers: ["block", "inline-block", "none", "hidden"],
        correct: 1
    },
    {
        question: "Which keyword is used to declare a variable that cannot be reassigned?",
        category: "javascript",
        answers: ["var", "let", "const", "static"],
        correct: 2
    },
    {
        question: "What will typeof empty array return in JavaScript?",
        category: "javascript",
        answers: ["array", "object", "null", "undefined"],
        correct: 1
    },
    {
        question: "Which method adds one or more elements to the end of an array?",
        category: "javascript",
        answers: ["push()", "pop()", "shift()", "unshift()"],
        correct: 0
    },
    {
        question: "How do you write a strict equality check in JavaScript?",
        category: "javascript",
        answers: ["=", "==", "===", "!=="],
        correct: 2
    },
    {
        question: "Which built-in function is used to print messages to the browser console?",
        category: "javascript",
        answers: ["print()", "console.log()", "alert()", "log.write()"],
        correct: 1
    }
]

let questionAnswer = document.getElementById('question-text');
let answerButtons = document.querySelectorAll('.answer-btn');
let sumbitButton = document.getElementById('submit-btn');
let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    const letters = ['A', 'B', 'C', 'D'];
    let currentQ = question[currentQuestionIndex];
    questionAnswer.textContent = currentQ.question;

    for (let i = 0; i < 4; i++) {
        answerButtons[i].textContent = letters[i] + ". " + currentQ.answers[i];

        answerButtons[i].addEventListener('click', function() {
            if (i === currentQ.correct) {
                score = score + 10;
            }       

            sumbitButton.disabled = false;
        });
    }
}

showQuestion();
   
    