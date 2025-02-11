const questions = [
    {
        question: "Which among the following type of soil has the largest area covered in India?",
        answer: [
            { text: "Alluvial", checked: true },
            { text: "Black", checked: false },
            { text: "Red", checked: false },
            { text: "Laterlite", checked: false },
        ]
    },
    {
        question: "Which Indian city is known for its wonderful beaches?'",
        answer: [
            { text: "Bangalore", checked: false },
            { text: "Goa", checked: true },
            { text: "Mumbai", checked: false },
            { text: "Surat", checked: false },
        ]
    },
    {
        question: "Where can you find Krish's pen(Used To Stab)",
        answer: [
            { text: "Obviously in his Pocket", checked: true },
            { text: "Krish's Room", checked: false },
            { text: "In your eye", checked: false },
            { text: "In his hand", checked: false },
        ]
    },
    {
        question: "Amravati Reservoir is located in which national park in India?",
        answer: [
            { text: "Indira Gandhi Wildlife Sanctuary and National", checked: true },
            { text: "Mudumalai National Park", checked: false },
            { text: "Pampadum Shola National Park", checked: false },
            { text: " None of them", checked: false },
        ]
    },
]
const nb = document.querySelector('#n-btn');
const ans = document.querySelector('.ans');
const h2 = document.querySelector('h2');
let questionIndex = 0;
let currScore = 0;

function startQuiz() {
    questionIndex = 0;
    currScore = 0;
    nb.style.display = "none";
    resumeQuiz();
}
function resumeQuiz() {
    reset();
    let ques = questions[questionIndex];
    let quesNo = questionIndex + 1;
    h2.innerHTML = "Q" + quesNo + ": " + ques.question;
    ques.answer.forEach(a => {
        const btn = document.createElement('button');
        btn.innerHTML = a.text;
        ans.appendChild(btn);
        btn.addEventListener('click', (e) => {
            selectAnswer(a.checked, e.target);
        })
        btn.classList.add('blocking');
    })
}
function reset() {
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
function endQuiz() {
    h2.innerHTML = `You have finished the quiz. Your Score: ${currScore}/${questions.length}`;
    nb.innerHTML = "Reset";
    nb.style.display = "block";
    nb.addEventListener('click', startQuiz);
    ans.innerHTML = "";
}
startQuiz();