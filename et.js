const questions = [
    {
        question: "The Oscar for best music(Original Song) was won by which of the following?",
        answer: [
            {text: "This is Life",checked: false},
            {text: "Life Me Up",checked: false},
            {text: "Hold My Hand",checked: false},
            {text: "Naatu Naatu",checked: true},
        ]
    },
    {
        question: "Which band sung the song 'Another One Bites The Dust'",
        answer: [
            {text: "Queens",checked: true},
            {text: "AC/DC",checked: false},
            {text: "The Rolling Stones",checked: false},
            {text: "Armaan's one",checked: false},
        ]
    },
    {   
        question: "Which of these movies recieved an Oscar??",
        answer: [
            {text: "Parasite",checked: true},
            {text: "Taxi Driver",checked: false},
            {text: "12 Angry Men",checked: false},
            {text: "The Shining",checked: false},
        ]
    },
    {   question: "Who is considered to be the best singer in the World(According to Quiz Master(Aryan))?",
        answer: [
            {text: "Taylor Swift",checked: false},
            {text: "Kishore Kumar",checked: false},
            {text: "Arijit Singh",checked: false},
            {text: "Lakshay Batra",checked: true},
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