let gameData = { 
    playersCount: 1,
    topic: 'html',
    questionsCount: 3 
};

let gameQuestions = [];
let selectedAnswerIndex = null;
let playerColors = ["red", "blue", "green", "orange"]

let timeSpan = document.getElementById('time-left');
let timeLeft = 15;
let timerInterval;
let playerButtons = [
    document.getElementById('btn-player1'),
    document.getElementById('btn-player2'),
    document.getElementById('btn-player3'),
    document.getElementById('btn-player4')
];
let playerNameSpan = document.getElementById('player-name');
let questionAnswer = document.getElementById('question-text');
let answerButtons = document.querySelectorAll('.answer-btn');
let sumbitButton = document.getElementById('submit-btn');
let currentQuestionIndex = 0;
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
    gameQuestions = [];
    players = [];
    for (let i = 0; i < gameData.playersCount; i++) {
    players.push({
        name: "Player " + (i + 1),
        score: 0,
        color: playerColors[i],
        answers: []
    });
}

if (gameData.topic === 'mixed') {
    for (let i = 0; i < question.length; i++) {
        gameQuestions.push(question[i]);
    }
} else {
    for (let i = 0; i < question.length; i++) {
        if (question[i].category === gameData.topic) {
            gameQuestions.push(question[i]);
        }
    }
}
let totalQuestions = gameData.playersCount * gameData.questionsCount;
gameQuestions = gameQuestions.slice(0, totalQuestions);

currentQuestionIndex = 0;
showQuestion();

    screen2.style.display = 'none';
    screen3.style.display = 'block';
});

let question = [
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        category: "html",
        answers: ["<script>", "<style>", "<css>", "<design>"],
        correct: 1
    },
    {
        question: "Which tag is used to create a table row in HTML?",
        category: "html",
        answers: ["<td>", "<th>", "<tr>", "<table-row>"],
        correct: 2
    },
    {
        question: "What does HTML stand for?",
        category: "html",
        answers: [
            "Hyperlinks and Text Markup Language",
            "Home Tool Markup Language",
            "Hyper Text Markup Language",
            "Hyperlinking Text Marking Language"
        ],
        correct: 2
    },
    {
        question: "Which HTML element is used to specify a footer for a document or section?",
        category: "html",
        answers: ["<bottom>", "<footer>", "<section-end>", "<foot>"],
        correct: 1
    },
    {
        question: "Which tag is used to define an unordered (bulleted) list?",
        category: "html",
        answers: ["<ul>", "<ol>", "<list>", "<li>"],
        correct: 0
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        category: "html",
        answers: ["<break>", "<lb>", "<br>", "<newline>"],
        correct: 2
    },
    {
        question: "Which HTML attribute specifies that an input field must be filled out before submitting?",
        category: "html",
        answers: ["validate", "required", "placeholder", "mandatory"],
        correct: 1
    },
    {
        question: "Which tag is used to define navigation links in HTML5?",
        category: "html",
        answers: ["<nav>", "<navigate>", "<links>", "<menu>"],
        correct: 0
    },
    {
        question: "Which input type defines a slider control in HTML5 forms?",
        category: "html",
        answers: ["slider", "range", "scroll", "controls"],
        correct: 1
    },
    {
        question: "Which tag is used to play audio files in HTML5?",
        category: "html",
        answers: ["<sound>", "<music>", "<audio>", "<mp3>"],
        correct: 2
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        category: "html",
        answers: ["class", "styles", "style", "font"],
        correct: 2
    },
    {
        question: "Which element is used to group related elements in a form with a border?",
        category: "html",
        answers: ["<fieldset>", "<legend>", "<group>", "<section>"],
        correct: 0
    },
    {
        question: "Which tag is used to embed a video in an HTML5 page?",
        category: "html",
        answers: ["<media>", "<movie>", "<video>", "<embed-video>"],
        correct: 2
    },
    {
        question: "What is the purpose of the <meta charset='UTF-8'> tag?",
        category: "html",
        answers: [
            "Sets page styling",
            "Specifies character encoding",
            "Links external script",
            "Optimizes images"
        ],
        correct: 1
    },
    {
        question: "Which tag defines important text with strong semantic emphasis (typically bolded)?",
        category: "html",
        answers: ["<bold>", "<strong>", "<i>", "<mark>"],
        correct: 1
    },
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
        question: "Which CSS property is used to make text bold?",
        category: "css",
        answers: ["font-style", "text-decoration", "font-weight", "font-bold"],
        correct: 2
    },
    {
        question: "What does CSS stand for?",
        category: "css",
        answers: [
            "Cascading Style Sheets",
            "Colorful Style Sheets",
            "Computer Style Sheets",
            "Creative Style Sheets"
        ],
        correct: 0
    },
    {
        question: "How do you select an element with class name menu in CSS?",
        category: "css",
        answers: ["#menu", ".menu", "menu", "*menu"],
        correct: 1
    },
    {
        question: "Which CSS property is used to add shadows to elements?",
        category: "css",
        answers: ["text-shadow", "box-shadow", "element-shadow", "shadow-effect"],
        correct: 1
    },
    {
        question: "Which property is used to center text horizontally?",
        category: "css",
        answers: ["align-items", "text-align", "vertical-align", "horizontal-align"],
        correct: 1
    },
    {
        question: "What is the default position value of an HTML element?",
        category: "css",
        answers: ["relative", "fixed", "absolute", "static"],
        correct: 3
    },
    {
        question: "Which CSS property controls the transparency of an element?",
        category: "css",
        answers: ["visibility", "opacity", "filter", "display"],
        correct: 1
    },
    {
        question: "Which CSS box-model property adds space outside the element's border?",
        category: "css",
        answers: ["margin", "padding", "outline", "spacing"],
        correct: 0
    },
    {
        question: "Which property is used to change the mouse cursor appearance on hover?",
        category: "css",
        answers: ["pointer", "cursor", "mouse", "hover-icon"],
        correct: 1
    },
    {
        question: "Which value of flex-direction arranges items vertically from top to bottom?",
        category: "css",
        answers: ["row", "column", "vertical", "column-reverse"],
        correct: 1
    },
    {
        question: "Which property is used to prevent text from wrapping to the next line?",
        category: "css",
        answers: ["word-wrap", "white-space", "text-overflow", "overflow-x"],
        correct: 1
    },
    {
        question: "What does the z-index property control?",
        category: "css",
        answers: [
            "Text zoom level",
            "Stack order of elements",
            "Element rotation",
            "Page scroll position"
        ],
        correct: 1
    },
    {
        question: "Which CSS unit is relative to the font-size of the root element (html)?",
        category: "css",
        answers: ["em", "rem", "vh", "%"],
        correct: 1
    },
    {
        question: "Which pseudo-class applies styles when an element is hovered with a mouse?",
        category: "css",
        answers: [":active", ":focus", ":hover", ":visited"],
        correct: 2
    },
    {
        question: "Which property is used to hide an element while still keeping its space on the page?",
        category: "css",
        answers: ["display: none", "visibility: hidden", "opacity: 1", "overflow: hidden"],
        correct: 1
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
        question: "Which symbol is used for single-line comments in JavaScript?",
        category: "javascript",
        answers: ["<!-- -->", "//", "/* */", "#"],
        correct: 1
    },
    {
        question: "Which built-in method converts a JSON string into a JavaScript object?",
        category: "javascript",
        answers: ["JSON.stringify()", "JSON.parse()", "JSON.object()", "JSON.toObject()"],
        correct: 1
    },
    {
        question: "What is the result of '5' + 3 in JavaScript?",
        category: "javascript",
        answers: ["8", "NaN", "'53'", "Error"],
        correct: 2
    },
    {
        question: "Which array method removes the last element and returns it?",
        category: "javascript",
        answers: ["shift()", "pop()", "slice()", "splice()"],
        correct: 1
    },
    {
        question: "What is the output of Boolean(0)?",
        category: "javascript",
        answers: ["true", "false", "undefined", "null"],
        correct: 1
    },
    {
        question: "Which keyword is used to define an asynchronous function?",
        category: "javascript",
        answers: ["await", "defer", "async", "promise"],
        correct: 2
    },
    {
        question: "Which method is used to schedule a function to run after a specified delay?",
        category: "javascript",
        answers: ["setInterval()", "delay()", "wait()", "setTimeout()"],
        correct: 3
    },
    {
        question: "How do you find the number of elements in an array named items?",
        category: "javascript",
        answers: ["items.count", "items.size", "items.length", "items.index"],
        correct: 2
    },
    {
        question: "Which of the following is NOT a primitive data type in JavaScript?",
        category: "javascript",
        answers: ["String", "Boolean", "Object", "Number"],
        correct: 2
    },
    {
        question: "Which array method creates a new array with all elements that pass a test?",
        category: "javascript",
        answers: ["filter()", "find()", "map()", "every()"],
        correct: 0
    },
    {
        question: "What does NaN stand for?",
        category: "javascript",
        answers: ["No Any Number", "Not a Number", "New assigned Number", "Null and Null"],
        correct: 1
    },
    {
        question: "Which method joins all elements of an array into a single string?",
        category: "javascript",
        answers: ["concat()", "combine()", "join()", "toString()"],
        correct: 2
    },
    {
        question: "Which operator is used to unpack iterable values or copy array elements?",
        category: "javascript",
        answers: ["...", "::", "??", "=>"],
        correct: 0
    },
    {
        question: "What will 10 % 3 evaluate to in JavaScript?",
        category: "javascript",
        answers: ["3", "1", "0", "3.33"],
        correct: 1
    },
    {
        question: "Which loop guarantees that the code block will execute at least once?",
        category: "javascript",
        answers: ["for", "while", "do...while", "for...in"],
        correct: 2
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
let players = [];

function showQuestion() {
    const letters = ['A', 'B', 'C', 'D'];
    let currentQ = gameQuestions[currentQuestionIndex];
    questionAnswer.textContent = currentQ.question;
    selectedAnswerIndex = null;
    sumbitButton.disabled = true;

    for (let i = 0; i < 4; i++) {
        answerButtons[i].textContent = letters[i] + ". " + currentQ.answers[i];
        answerButtons[i].style.backgroundColor = "";
    }    
    let currentPlayer = players[currentQuestionIndex % gameData.playersCount];
    playerNameSpan.textContent = currentPlayer.name;
    playerNameSpan.style.color = currentPlayer.color;
    startTimer();
}
for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener('click', function() {
        clearInterval(timerInterval);
        let currentPlayer = players[currentQuestionIndex % gameData.playersCount];
      selectedAnswerIndex = i;
      sumbitButton.disabled = false;
   
      for (let j = 0; j < answerButtons.length; j++) {
        answerButtons[j].style.backgroundColor = "";
      }

      answerButtons[i].style.backgroundColor = currentPlayer.color;
    });
  }
  function startTimer(){
    clearInterval(timerInterval);
    timeLeft = 15;
timeSpan.textContent = timeLeft;
timerInterval = setInterval(function(){
    timeLeft--;
    timeSpan.textContent = timeLeft;
    if (timeLeft <= 0){
clearInterval(timerInterval);
sumbitButton.disabled = false;
sumbitButton.click();
    }

}, 1000);
  }

sumbitButton.addEventListener('click', function() {
    let currentPlayerIndex = (currentQuestionIndex % gameData.playersCount);
    let currentPlayer = players[currentPlayerIndex];

    let currentq = gameQuestions[currentQuestionIndex];
    if (selectedAnswerIndex === currentq.correct) {
        currentPlayer.score += 10;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < gameQuestions.length) {
        showQuestion();
    } else {
        showScore();
    }
});
function showScore(){
    clearInterval(timerInterval);
    players.sort((a, b) => b.score - a.score);
    screen3.style.display = 'none';
    const screen4 = document.getElementById('screen-4');
    screen4.style.display = 'block';
console.log('game finish')
}


