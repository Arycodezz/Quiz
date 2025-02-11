const questions = [
    {
    question: "What type of energy is stored in a rechargeable battery?",
    answers: [
        {text: "Mechanical", correct: false},
        {text: "Chemical", correct: true},
        {text: "Nuclear", correct: false},
        {text: "Electrical", correct: false},
    ],
    },
    {
    question: "The mRNA vaccine technology for COVID-19 works by delivering instructions to cells to produce which type of molecule?",
    answers: [
        {text: "Viruses", correct: false},
        {text: "Antibodies", correct: true},
        {text: "Bacteria", correct: false},
        {text: "DNA", correct: false},
    ],
    },
    {   
    question: " Which renewable energy source relies on capturing energy from the sun's rays?",
    answers: [
        {text: "Geothermal", correct: false},
        {text: "Wind", correct: false},
        {text: "Hydropower", correct: false},
        {text: "Solar", correct: true},
    ],
    }
];
const nb = document.querySelector('#n-btn');
const qe = document.querySelector('h2');
const ans = document.querySelector('.ans');

let currScore = 0;
let currQuestionIndex = 0;

function startQuiz(){
    currScore = 0;
    currQuestionIndex = 0;
    nb.style.display = "none";
    showQuestion();
}
function showQuestion(){
    reset();
    let currentQuestion = questions[currQuestionIndex];
    let quesNo = currQuestionIndex + 1;
    qe.innerHTML = quesNo + ": " + currentQuestion.question;
    
    currentQuestion.answers.forEach(a => {
        const button = document.createElement('button');
        button.innerHTML = a.text;
        button.classList.add("blocking");
        button.addEventListener("click" , (e) => selectAnswer(a.correct,e.target))
        ans.appendChild(button);
    });
}
function reset(){
    ans.innerHTML = "";
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
        currQuestionIndex++;
        if (currQuestionIndex < questions.length) {
            showQuestion();
        }
        else {
            endQuiz();
        }
    },500);
}
function endQuiz(){
    qe.innerHTML = `Quiz Completed! Well Done Your score: ${currScore}/${questions.length}`;
    nb.innerHTML = "Restart";
    nb.style.display = "block"; 
    nb.onclick = startQuiz;
    ans.innerHTML = "";
}
startQuiz();
