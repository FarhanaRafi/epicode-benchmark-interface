let originalQAndA = [{
    number: 1,
    question : "Who found america?",
    options: ["Columbus", "Magellan", "Thomas", "George"],
    answer: "Columbus",
    level : "medium"
}, {
    number: 2,
    question : "In computer memory measurement units, PT stands for?",
    options: ["Perabyte", "Pexabyte", "Petabyte", "None of these"],
    answer: "Petabyte",
    level : "easy"
},{
    number: 3,
    question : "Which is the smallest memory measurement unit in given options?",
    options: ["Byte", "Micro Byte", "Kilo Byte", "Nibble"],
    answer: "Nibble",
    level : "medium"
},{
    number: 4,
    question : "Which can be the input and output devices both?",
    options: ["Scanner", "Touch screen monitor", "Digitizer", "None of these"],
    answer: "Touch screen monitor",
    level : "hard"
},{
    number: 5,
    question : "Which is not a correct type of a computer?",
    options: ["Mini Frame Computer", "Super Computer", "Workstations", "None of these"],
    answer: "Mini Frame Computer",
    level : "hard"
},{
    number: 6,
    question : "Which electronics component is used in first generation computers?",
    options: ["LSI Chips", "ULSI Chips", "Vacuum Tubes", "None of these"],
    answer: "Vacuum Tubes",
    level : "medium"
},{
    number: 7,
    question : "What is the full form of ALU?",
    options: ["Arithmetic Logic Unit", "Arithmetic Local Unit", "Advance Logical Unit", "None of these"],
    answer: "Arithmetic Logic Unit",
    level : "hard"
},{
    number: 8,
    question : "What is the full form of CU?",
    options: ["Compound Unit", "Communication Unit", "Computer Unit", "Control Unit"],
    answer: "Control Unit",
    level : "medium"
},{
    number: 9,
    question : "What is the full form of CPU?",
    options: ["Central Process Unit", "Central Processing Unit", "Central Programming Unit", "Central Progressive Unit"],
    answer: "Central Processing Unit",
    level : "easy"
},{
    number: 10,
    question : "Who invented Computer?",
    options: ["Ken Thompson", "Charles Babbage", "Dennis Ritchie", "George"],
    answer: "Charles Babbage",
    level : "easy"
}]

let questionsToDisplay = originalQAndA;
let currentInterval = 0;
let currentQuestion
let correctAnswers = 0;
let wrongAnswers = 0;
let selectedAnswer
let timer
let questionCount = 1;

function loadQuestion(){
    if(questionsToDisplay.length == 0){
        console.log(correctAnswers)
        sessionStorage.setItem("correctAnswers", correctAnswers)
        sessionStorage.setItem("wrongAnswers", wrongAnswers)
        window.location.href = 'result.html';
    }
    let questionNum = document.getElementById("q-num")
    questionNum.innerText = "QUESTION " + questionCount;
    questionCount ++
    let questionParent = document.getElementById("questionAndOptions")
    questionParent.innerHTML = '';
    let questionAndOptions = document.createElement("div");
    
    let randomIndex = Math.floor(Math.random()*questionsToDisplay.length);
    currentQuestion = questionsToDisplay[randomIndex]
    questionAndOptions.classList.add("question-div");
    
    let question = document.createElement("h1");
    question.innerText = currentQuestion.question;
    questionParent.appendChild(question)
    question.classList.add("question-h1")

    let options = document.createElement("div")
    options.classList.add("button-container")

    let option1 = document.createElement("button")
    option1.innerText = currentQuestion.options[0]
    option1.classList.add("option-btn")
    option1.addEventListener("click", onAnswerSelect)


    let option2 = document.createElement("button")
    option2.innerText = currentQuestion.options[1]
    option2.classList.add("option-btn")
    option2.addEventListener("click", onAnswerSelect)

    let option3 = document.createElement("button")
    option3.innerText = currentQuestion.options[2]
    option3.classList.add("option-btn")
    option3.addEventListener("click", onAnswerSelect)

    let option4 = document.createElement("button")
    option4.innerText = currentQuestion.options[3]
    option4.classList.add("option-btn")
    option4.addEventListener("click", onAnswerSelect)

    options.appendChild(option1)
    options.appendChild(option2)
    options.appendChild(option3)
    options.appendChild(option4)
    questionParent.appendChild(options)
    
    questionsToDisplay.splice(randomIndex, 1);
    
    if(currentQuestion.level === "hard"){
        currentInterval = 90;
    } else if(currentQuestion.level === "medium"){
        currentInterval = 60;
    } else {
        currentInterval = 30;
    }

    let countdownNumber = document.getElementById("countdown-number")
    countdownNumber.textContent = currentInterval;
    
    timer = setInterval(function(){
        if(currentInterval > 0) {
            currentInterval --;
        } else {
            clearInterval(timer)
            loadQuestion()
        }
     countdownNumber.textContent = currentInterval;
    }, 1000);


}


function onClickNext(){
    if(currentQuestion.answer === selectedAnswer){
        correctAnswers ++
    }else {
        wrongAnswers ++
    }
    clearInterval(timer)
    loadQuestion()
}

function onAnswerSelect(event){
    let allButtons = event.target.parentNode.children
    for(let i = 0; i < allButtons.length; i++){
        if(allButtons[i].classList.contains("button-clicked")){
            allButtons[i].classList.remove("button-clicked")
        } 
    }

    console.log(allButtons)
    selectedAnswer = event.target.innerText;
    event.target.classList.add("button-clicked")
     
}
 



function onLoadAction(){
    loadQuestion()
}


window.onload = onLoadAction


