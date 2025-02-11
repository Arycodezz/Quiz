const questions = [
    {
        question: "What is the normal time difference between which both the Summer Olympics and Winter Olympics are held?",
        answer: [
            {text: "1 Year",checked: false},
            {text: "2 Years",checked: true},
            {text: "3 Years",checked: false},
            {text: "4 Years",checked: false},
        ]
    },
    {
        question: "What is the main thing you need to be a successful striker?",
        answer: [
            {text: "Ego",checked: true},
            {text: "Skill",checked: false},
            {text: "Talent",checked: false},
            {text: "Teamwork",checked: false},
        ]
    },
    {   
        question: "Who is the best volleyball player in the World??",
        answer: [
            {text: "Karch Kiraly",checked: false},
            {text: "Jimmy George",checked: false},
            {text: "Aryan Ranjan",checked: false},
            {text: "Shoyo Hinata",checked: true},
        ]
    },
    {   question: "Which country hosted the most number of the Commonwealth Games?",
        answer: [
            {text: "New Zealand",checked: false},
            {text: "Canada",checked: false},
            {text: "United Kingdom",checked: false},
            {text: "Australia",checked: true},
        ]
    },
]
const nb = document.querySelector('#n-btn');
const ans = document.querySelector('.ans');
const h2 = document.querySelector('h2');
let questionIndex = 0;
let currScore = 0;

function startQuiz(){
    questionIndex = 0;
    currScore = 0;
    nb.style.display = "none";
    resumeQuiz();
}
function resumeQuiz(){
    reset();
    let ques = questions[questionIndex];
    let quesNo = questionIndex+1;
    h2.innerHTML = "Q" + quesNo + ": " + ques.question;
    ques.answer.forEach( a => {
        const btn = document.createElement('button');
        btn.innerHTML = a.text;
        ans.appendChild(btn);
        btn.addEventListener('click', (e) => {
            selectAnswer(a.checked,e.target);
        })
        btn.classList.add('blocking');
    })
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
        questionIndex++;
        if (questionIndex < questions.length) {
            resumeQuiz();
        }
        else {
            endQuiz();
        }
    },500);
}
function endQuiz(){
    h2.innerHTML = `You have finished the quiz. Your Score: ${currScore}/${questions.length}`;
    nb.innerHTML = "Reset";
    nb.style.display = "block";
    nb.addEventListener('click', startQuiz);
    ans.innerHTML = "";
}
startQuiz();