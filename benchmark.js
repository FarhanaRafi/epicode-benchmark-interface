let originalQAndA = [{
    number: 1,
    question : "Who found america?",
    options: ["Columbus", "Magellan", "Thomas", "George"],
    answer: "Columbus",
}, {
    number: 2,
    question : "In computer memory measurement units, PT stands for?",
    options: ["Perabyte", "Pexabyte", "Petabyte", "None of these"],
    answer: "Petabyte"
},{
    number: 3,
    question : "Which is the smallest memory measurement unit in given options?",
    options: ["Byte", "Micro Byte", "Kilo Byte", "Nibble"],
    answer: "Nibble"
},{
    number: 4,
    question : "Which can be the input and output devices both?",
    options: ["Scanner", "Touch screen monitor", "Digitizer", "None of these"],
    answer: "Touch screen monitor"
},{
    number: 5,
    question : "Which is not a correct type of a computer?",
    options: ["Mini Frame Computer", "Super Computer", "Workstations", "None of these"],
    answer: "Mini Frame Computer"
},{
    number: 6,
    question : "Which electronics component is used in first generation computers?",
    options: ["LSI Chips", "ULSI Chips", "Vacuum Tubes", "None of these"],
    answer: "Vacuum Tubes"
},{
    number: 7,
    question : "What is the full form of ALU?",
    options: ["Arithmetic Logic Unit", "Arithmetic Local Unit", "Advance Logical Unit", "None of these"],
    answer: "Arithmetic Logic Unit"
},{
    number: 8,
    question : "What is the full form of CU?",
    options: ["Compound Unit", "Communication Unit", "Computer Unit", "Control Unit"],
    answer: "Control Unit"
},{
    number: 9,
    question : "What is the full form of CPU?",
    options: ["Central Process Unit", "Central Processing Unit", "Central Programming Unit", "Central Progressive Unit"],
    answer: "Central Processing Unit"
},{
    number: 10,
    question : "Who invented Computer?",
    options: ["Ken Thompson", "Charles Babbage", "Dennis Ritchie", "George"],
    answer: "Charles Babbage"
}]

let questionsToDisplay = originalQAndA;

function loadQuestion(){
    let questionParent = document.getElementById("questionAndOptions")
    let questionAndOptions = document.createElement("div")
    let randomIndex = Math.floor(Math.random()*questionsToDisplay.length)
    questionAndOptions.id = questionsToDisplay[randomIndex].number
    questionAndOptions.classList.add("question-div")
    let question = document.createElement("h1")
    question.innerText = questionsToDisplay[randomIndex].question

    questionParent.appendChild(question)
    let options = document.createElement("div")
    let option1 = document.createElement("div")
    option1.innerText = questionsToDisplay[randomIndex].options[0]
    let option2 = document.createElement("div")
    option2.innerText = questionsToDisplay[randomIndex].options[1]
    let option3 = document.createElement("div")
    option3.innerText = questionsToDisplay[randomIndex].options[2]
    let option4 = document.createElement("div")
    option4.innerText = questionsToDisplay[randomIndex].options[3]
    options.appendChild(option1)
    options.appendChild(option2)
    options.appendChild(option3)
    options.appendChild(option4)
    questionParent.appendChild(options)
    questionsToDisplay.splice(randomIndex, -1);

}

function onLoadAction(){
    loadQuestion()
}


window.onload = onLoadAction


