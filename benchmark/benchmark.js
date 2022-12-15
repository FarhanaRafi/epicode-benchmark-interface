let originalQAndA = [
  {
    number: 1,
    question: "Who found america?",
    options: ["Columbus", "Magellan", "Thomas", "George"],
    answer: "Columbus",
    level: "medium",
  },
  {
    number: 2,
    question: "In computer memory measurement units, PT stands for?",
    options: ["Perabyte", "Pexabyte", "Petabyte", "None of these"],
    answer: "Petabyte",
    level: "easy",
  },
  {
    number: 3,
    question: "Which is the smallest memory measurement unit in given options?",
    options: ["Byte", "Micro Byte", "Kilo Byte", "Nibble"],
    answer: "Nibble",
    level: "medium",
  },
  {
    number: 4,
    question: "Which can be the input and output devices both?",
    options: ["Scanner", "Touch screen monitor", "Digitizer"],
    answer: "Touch screen monitor",
    level: "hard",
  },
  {
    number: 5,
    question: "Which is not a correct type of a computer?",
    options: ["Mini Frame Computer", "Super Computer", "Workstations"],
    answer: "Mini Frame Computer",
    level: "hard",
  },
  {
    number: 6,
    question:
      "Which electronics component is used in first generation computers?",
    options: ["LSI Chips", "ULSI Chips", "Vacuum Tubes", "None of these"],
    answer: "Vacuum Tubes",
    level: "medium",
  },
  {
    number: 7,
    question: "What is the full form of ALU?",
    options: [
      "Arithmetic Logic Unit",
      "Arithmetic Local Unit",
      "Advance Logical Unit",
      "None of these",
    ],
    answer: "Arithmetic Logic Unit",
    level: "hard",
  },
  {
    number: 8,
    question: "What is the full form of CU?",
    options: [
      "Compound Unit",
      "Communication Unit",
      "Computer Unit",
      "Control Unit",
    ],
    answer: "Control Unit",
    level: "medium",
  },
  {
    number: 9,
    question: "What is the full form of CPU?",
    options: [
      "Central Process Unit",
      "Central Processing Unit",
      "Central Programming Unit",
      "Central Progressive Unit",
    ],
    answer: "Central Processing Unit",
    level: "easy",
  },
  {
    number: 10,
    question: "Who invented Computer?",
    options: ["Ken Thompson", "Charles Babbage", "Dennis Ritchie", "George"],
    answer: "Charles Babbage",
    level: "easy",
  },
];

let questionsToDisplay = originalQAndA;
let currentInterval = 0;
let currentQuestion;
let correctAnswers = 0;
let wrongAnswers = 0;
let selectedAnswer;
let timer;
let questionCount = 1;

const FULL_DASH_ARRAY = 283;

const COLOR_CODES = {
  info: {
    color: "green",
  },
};

let timeLimit;
let timePassed = 0;
let timeLeft;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

/*
This function will load question to the page in random order, if no questions are left it goes to the result page.
Answers are also shown in random order. 
*/
function loadQuestion() {
  if (questionsToDisplay.length == 0) {
    console.log(correctAnswers);
    sessionStorage.setItem("correctAnswers", correctAnswers);
    sessionStorage.setItem("wrongAnswers", wrongAnswers);
    window.location.href = "../Result/result.html";
  }
  let questionNum = document.getElementById("q-num");
  questionNum.innerText = "QUESTION " + questionCount;
  questionCount++;
  let questionParent = document.getElementById("questionAndOptions");
  questionParent.innerHTML = "";
  let questionAndOptions = document.createElement("div");

  let randomIndex = Math.floor(Math.random() * questionsToDisplay.length);
  currentQuestion = questionsToDisplay[randomIndex];
  questionAndOptions.classList.add("question-div");

  let question = document.createElement("h4");
  question.innerText = currentQuestion.question;
  questionParent.appendChild(question);
  question.classList.add("question-h1");

  let options = document.createElement("div");
  options.classList.add("button-container");

  let optionCount = currentQuestion.options.length;
  for (let i = 0; i < optionCount; i++) {
    let optionButton = document.createElement("button");
    let randomIndexOption = Math.floor(
      Math.random() * currentQuestion.options.length
    );
    optionButton.innerText = currentQuestion.options[randomIndexOption];
    currentQuestion.options.splice(randomIndexOption, 1);
    optionButton.classList.add("option-btn");
    optionButton.addEventListener("click", onAnswerSelect);
    options.appendChild(optionButton);
  }

  questionParent.appendChild(options);

  questionsToDisplay.splice(randomIndex, 1);

  if (currentQuestion.level === "hard") {
    currentInterval = 90;
  } else if (currentQuestion.level === "medium") {
    currentInterval = 60;
  } else {
    currentInterval = 30;
  }
  timeLeft = currentInterval;
  timeLimit = currentInterval;

  startTimer(currentInterval);
}

/*
when next is clicked, the next question is loaded
and the time interval is also cleared
*/
function onClickNext() {
  if (currentQuestion.answer === selectedAnswer) {
    correctAnswers++;
  } else {
    wrongAnswers++;
  }
  clearInterval(timerInterval);
  loadQuestion();
}

/* 
If an option button is clicked, previously selected button is unclicked.
also clicked button is set as answer.  
*/
function onAnswerSelect(event) {
  let allButtons = event.target.parentNode.children;
  for (let i = 0; i < allButtons.length; i++) {
    if (allButtons[i].classList.contains("button-clicked")) {
      allButtons[i].classList.remove("button-clicked");
    }
  }

  console.log(allButtons);
  selectedAnswer = event.target.innerText;
  event.target.classList.add("button-clicked");
}

/*
This function is used to generate circle in the timer according to time left
*/
function setCircleDasharray() {
  console.log(timeLeft);
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / timeLimit;
  return rawTimeFraction - (1 / timeLimit) * (1 - rawTimeFraction);
}
/*
This is used to set timer to the DOM
also set interval function is used to update seconds text.
*/
function startTimer() {
  timePassed = 0;
  remainingPathColor = COLOR_CODES.info.color;

  document.getElementById("timer-container").innerHTML = `
    <div class="base-timer">
      <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="base-timer__circle">
          <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
          <path
            id="base-timer-path-remaining"
            stroke-dasharray="283"
            class="base-timer__path-remaining ${remainingPathColor}"
            d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
          ></path>
        </g>
      </svg>
        <span id="base-timer-label" class="base-timer__label">
      </div>
        </span>
    </div>
    `;

  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = timeLimit - timePassed;
    document.getElementById("base-timer-label").innerHTML =
      "<span class='seconds-label'>SECONDS</span>" +
      "<br/>" +
      timeLeft +
      "</br>" +
      "<span class='seconds-label2'>REMAINING</span>";

    setCircleDasharray();

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

/*
when current questions time is over it goes to the next question and the timer is cleared
*/
function onTimesUp() {
  clearInterval(timerInterval);
  loadQuestion();
}

function onLoadAction() {
  loadQuestion();
}

window.onload = onLoadAction;
