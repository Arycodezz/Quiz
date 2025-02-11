const questions = [
    {
        question: "Which Veda is known as the Book of Chants?",
        answers: [
            {answer: "Rigveda",checked: false},
            {answer: "Yajurveda",checked: false},
            {answer: "Samaveda",checked: true},
            {answer: "Atharvaveda",checked: false},
        ],
    },
    {
        question: "Which Sultan of Delhi established the city of Agra?",
        answers: [
            {answer: "Illtutmish",checked: false},
            {answer: "Balban",checked: false},
            {answer: "Sikandar Lodi",checked: true},
            {answer: "Atharvaveda",checked: false},
        ],
    },
    {
        question: "Who is considered the World's most dangerous dictator?",
        answers: [
            {answer: "Pol Pot",checked: true},
            {answer: "Joseph Stalin",checked: false},
            {answer: "Adolf Hitler",checked: false},
            {answer: "Mao Zedong",checked: false},
        ],
    },
    {
        question: "Who was the emperor of France who was exiled to Saint Helena?",
        answers: [
            {answer: "Louis |||",checked: false},
            {answer: "Napolean",checked: true},
            {answer: "Charles",checked: false},
            {answer: "Siddhant",checked: false},
        ],
    }
];
const nb = document.querySelector('#n-btn');
const ans = document.querySelector('.ans');
const h2 = document.querySelector('h2');
let questionIndex = 0;
let currScore = 0;
function startQuiz(){
    questionIndex = 0;
    currScore = 0;
    nb.style.display = "none";
    quizresume();
}
function quizresume(){
    reset();
    let ques = questions[questionIndex];
    let quesNo = questionIndex + 1;
    h2.innerHTML = "Q" + quesNo + ": " + ques.question;
    ques.answers.forEach(a => {
        const btn = document.createElement('button');
        btn.innerHTML = a.answer;
        btn.classList.add("blocking");
        btn.addEventListener("click", (e) => {
            selectAnswer(a.checked,e.target)
    });
        ans.appendChild(btn);
    }); 
}
function reset(){
    ans.innerHTML =  " ";
}
function selectAnswer(isCorrect, button) {
    if (isCorrect) {
        currScore++;
        button.style.backgroundColor = 'green';
    }
    else {
        button.style.backgroundColor = 'red';
    }
    setTimeout(() => {
        questionIndex++;
        if (questionIndex < questions.length) {
            quizresume();
        }
        else {
            endQuiz();
        }
    },500);
}
function endQuiz(){
    h2.innerHTML =  `Quiz is completed Your score is ${currScore}/${questions.length}`;
    nb.innerHTML = "Restart";
    nb.style.display = "block";
    nb.onclick = startQuiz;
    ans.innerHTML = "";
}
startQuiz();