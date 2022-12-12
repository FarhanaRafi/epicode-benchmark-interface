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

function loadQuestion(){
    let questionParent = document.getElementById("questionAndOptions")
    questionParent.innerHTML = '';
    let questionAndOptions = document.createElement("div");
    
    let randomIndex = Math.floor(Math.random()*questionsToDisplay.length);
    currentQuestion = questionsToDisplay[randomIndex]
    questionAndOptions.id = questionsToDisplay[randomIndex].number;
    questionAndOptions.classList.add("question-div");
    
    let question = document.createElement("h1");
    question.innerText = questionsToDisplay[randomIndex].question;
    questionParent.appendChild(question)
    question.classList.add("question-h1")

    let options = document.createElement("div")
    options.classList.add("button-container")

    let option1 = document.createElement("button")
    option1.innerText = questionsToDisplay[randomIndex].options[0]
    option1.classList.add("option-btn")

    let option2 = document.createElement("button")
    option2.innerText = questionsToDisplay[randomIndex].options[1]
    option2.classList.add("option-btn")

    let option3 = document.createElement("button")
    option3.innerText = questionsToDisplay[randomIndex].options[2]
    option3.classList.add("option-btn")

    let option4 = document.createElement("button")
    option4.innerText = questionsToDisplay[randomIndex].options[3]
    option4.classList.add("option-btn")

    options.appendChild(option1)
    options.appendChild(option2)
    options.appendChild(option3)
    options.appendChild(option4)
    questionParent.appendChild(options)
    questionsToDisplay.splice(randomIndex, -1);
    if(questionsToDisplay[randomIndex].level === "hard"){
        currentInterval = 90;
    } else if(questionsToDisplay[randomIndex].level === "medium"){
        currentInterval = 60;
    } else {
        currentInterval = 30;
    }
    let countdownNumber = document.getElementById("timer")
    countdownNumber.textContent = currentInterval;
    let intervalFunction = setInterval(function(){
        if(currentInterval > 0) {
            currentInterval --;
        } else {
            clearInterval(intervalFunction)
            loadQuestion()
        }
     countdownNumber.textContent = currentInterval;
    }, 1000);
}




 



function onLoadAction(){
    loadQuestion()
}


window.onload = onLoadAction


