const buttons = document.querySelectorAll('.btn-difficulty');
const loaderRef = document.querySelector("#loader");
const questionAreaRef = document.querySelector("#question-area");
const instructions = document.querySelector("#howToPlay");
const form = document.querySelector("#start-quiz");
const chooseLevelAreaRef = document.querySelector("#choose-level-area");
const startButton = document.querySelector("#btn-start");
const selectedLevel = document.querySelector("#selected-level");
const usernameRef = document.querySelector("#username");
const answersEl = document.querySelectorAll(".btn-answer")
const questionEl = document.querySelector('#question');
const scoreEl    = document.querySelector('#score');       
const wrongEl    = document.querySelector('#incorrect');
const secondsEl = document.querySelector("#seconds");
const questionProgress = document.querySelector("#questions-number");


let correctScore = 0;
let incorrectScore = 0;
let questionNumber = 10;
let questions = [];
let questionIndex = 0;
const maxQuestions = 10;
let acceptingAnswers = true;
let timeCounter;

const displayArea = el => el.classList.remove('hidden');
const hideArea    = el => el.classList.add('hidden');
const shuffle=(answers) => answers.sort(()=> Math.random() - .5);

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // remove 'active' from all
    buttons.forEach(btn => btn.classList.remove('active'));
    // add 'active' only to the clicked one
    button.classList.add('active');
  });
});


/**
 * Shows or hides the instruction box
 */
function showInstructions() {
    if (instructions.style.display === "none") {
      instructions.style.display = "block";
    } else {
      instructions.style.display = "none";
    }
  }




/**
 * Fetches trivia questions from the Open Trivia Database API based on the specified difficulty.
 * Display level of difficulty in the question area.
 * @param {string} difficulty - adjustable setting chosen.
 * @returns {Promise<Array>} - returns a promise of formatted questions.
 * @throws {Error} throws an error if does not fetch.
 */
 async function loadQuestion(difficulty){
     hideArea(chooseLevelAreaRef);
     displayArea(loaderRef);
     const APIUrl = 'https://opentdb.com/api.php';
     const result = await fetch(`${APIUrl}?amount=10&category=22&difficulty=${difficulty}&type=multiple`);
     if (!result.ok){
       throw new Error('Failed to fetch questions');
     }
     const data = await result.json();
     return formatQuestions(data.results);
 }


  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const activeBtn = document.querySelector(".btn-difficulty.active")
    const level = activeBtn ? activeBtn.dataset.level : null;
    const myUsername = usernameRef.value.trim();

    if (myUsername && level) {
      await startGame(level);  
      hideArea(loaderRef);
      displayArea(questionAreaRef);
      selectedLevel.textContent = level;
     
    } else {
      alert("Please enter the required informations.");
    }
  });


  showInstructions()

/**
* Start the the quiz when the start button is clicked
* @param {string} level - Fetches quiz questions based on the selected level.
* @param {Error} Error -handles error if fails to start
*/

async function startGame(level) {
  try{
  questions = await loadQuestion(level)
  questionNumber = 0;
  renderQuestion();
} catch(Error){                                                           
  console.error(Error);
  }
};

/**
* @param {Array} results - The data from the API
* @returns {Array} A formatted question object with properties from the API 
*/

function formatQuestions(results){
  return results.map(q => {
     const question = q.question;
     const correct  = q.correct_answer;
     const wrongs   = q.incorrect_answers;
     const answers  = shuffle([correct, ...wrongs]);
     return {question, correct, answers}
  });
};




/**
 * Sets timer for the quiz and counts down from 20 secs
 */

 const startTimer = () => {
  clearInterval(timeCounter);
  let sec = 20;
  const timerElement = secondsEl;
  timeCounter = setInterval(() => {
    timerElement.textContent = sec;
    sec--;
    if (sec <= 0) {
      clearInterval(timeCounter);
      renderQuestion();
    }
  }, 1000);
};


/**
* Display the question and answer options.
* @returns End quiz if the number of question reached 10.
*Assign each answer to a specific button.
*/


function renderQuestion(){
  if (questionNumber >= 10){ 
  return endQuiz();
  }
  clearStatusClass(answersEl);
  const currentQuestion = questions[questionNumber]
  questionEl.textContent = currentQuestion.question;
  answersEl.forEach((btn, i) =>{
    btn.innerHTML= currentQuestion.answers[i];
    btn.addEventListener("click", onAnswerClick);
    
  })
  questionProgress.innerHTML=`Question ${questionNumber + 1} out of ${maxQuestions}`
  questionNumber++;
  startTimer();
}


/** 
 * @param {string} e retrieve the selected answer. 
 */

function onAnswerClick(e){
  const ansChosen = e.target.innerHTML;
  checkAnswer(ansChosen);
  
}

/**
 * find the button corresponding to the choosen answer and apply correct or wrong style to it.
 * @param {string} ansChosen the choosen answer that the user selected.
 */

function checkAnswer(ansChosen){
  const currentQuestion = questions[questionNumber - 1]
  const btnChosen = Array.from (answersEl).find((button) => button.textContent === ansChosen);
  const applyClass = ansChosen === currentQuestion.correct ? "correct" : "wrong";
  btnChosen.classList.add(applyClass);
  disableAnswerButtons();
  
}

const clearStatusClass = (button) => {
  button.forEach((btn) => {
    btn.classList.remove("correct", "wrong");
    btn.classList.remove("disable");
  });
};

const disableAnswerButtons = () => {
  answersEl.forEach((btn) => {
    btn.classList.add("disable");
    btn.disable = true;
  });
};



