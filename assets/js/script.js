const buttons = document.querySelectorAll('.btn-difficulty');
const loaderRef = document.querySelector("#loader");
const questionAreaRef = document.querySelector("#question-area");
const instructions = document.querySelector("#howToPlay");
const howToBtn = document.querySelector('#howTo')
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
const finalAreaRef    = document.querySelector('#final-area');
const finalSummaryEl  = document.querySelector('#final-summary');
const playAgainBtn    = document.querySelector('#play-again');
const ratingRef = document.querySelector("#rating");
const stars = document.querySelectorAll("#stars span");


let correctScore = 0;
let wrongScore = 0;
let score = 1;
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
  howToBtn.addEventListener('click', ()=>{
    instructions.classList.toggle('hidden');
  });

  /**
   * Increment correct and wrong scores.
   * @param {number} num 
   */
  const incrementCorrectScore = (num) => {
    correctScore += num;
    scoreEl.textContent = correctScore; 
  }
  
  const incrementWrongScore = (num) => {
    wrongScore += num;
    wrongEl.textContent = wrongScore; }
  



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

/**
* Start the the quiz when the start button is clicked
* @param {string} level - Fetches quiz questions based on the selected level.
* @param {Error} Error -handles error if fails to start
*/

async function startGame(level) {
  try{
  questions = await loadQuestion(level)
  questionNumber = 0;

  if(questionNumber >= questions.length){
    endQuiz
  }else{
    renderQuestion()
  }
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
     const question = decodeHTML(q.question);
     const correct  = decodeHTML(q.correct_answer);
     const wrongs   = q.incorrect_answers.map(decodeHTML);
     const answers  = shuffle([correct, ...wrongs]);
     return {question, correct, answers}
  });
};

/**
 * formmate any special characters in the questions and answers and return a string
 * @param {string} str 
 * @returns 
 */
function decodeHTML(str) {
  const txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
}




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
 

  setTimeout(() => {
    clearInterval(timeCounter);
    renderQuestion();
  }, 1000);
   
  if(ansChosen){
    if(ansChosen===currentQuestion.correct){
       incrementCorrectScore(score);
    }else{
        incrementWrongScore(score);
    }
  }
  
  
}

const showCorrectAnswer = () =>{}
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

/**
 * Clear scores and username and remove active class from difficulty button.
 * Show the username and level again
 * 
 */

playAgainBtn.addEventListener('click', () => {
  correctScore = 0;
  wrongScore = 0;
  questionNumber= 0;
  scoreEl.textContent = '0';
  wrongEl.textContent = '0';
  usernameRef.value =''
  buttons.forEach(btn => btn.classList.remove('active'))
  hideArea(finalAreaRef);
  displayArea(chooseLevelAreaRef);
  hideArea(ratingRef)
});

stars.forEach(star => {
  star.addEventListener("click", () => {
    const rating = star.dataset.value;
    alert(`Thank you! You rated this quiz ${rating} ⭐`);
  });
});

/**
 * Stop timer if it is still running
 * hide question area and display Final score area 
 * Friendly summary message
 */

function endQuiz() {
  if (timeCounter) {
    clearInterval(timeCounter);
  }

  hideArea(questionAreaRef);
  displayArea(finalAreaRef);
  displayArea(ratingRef)

  const totalQuestions = questions.length;
  const correct = correctScore;
  const percent = Math.round((correct / totalQuestions) * 100);
  if (percent === 100) {
    finalSummaryEl.textContent = `Perfect score! You got ${correct} out of ${totalQuestions}. 🌟`;
  } else if (percent >= 70) {
    finalSummaryEl.textContent = `Great job! You scored ${correct} out of ${totalQuestions}.`;
  } else if (percent >= 40) {
    finalSummaryEl.textContent = `You scored ${correct} out of ${totalQuestions}. Keep practising!`;
  } else {
    finalSummaryEl.textContent = `You scored ${correct} out of ${totalQuestions}. Don’t worry – even great detectives need training.`;
  }
}



/*document.getElementById("rateQuizBtn").addEventListener("click", () => {
  popup.classList.remove("hidden");
});*/










