const buttons = document.querySelectorAll('.btn-difficulty');
const loaderRef = document.querySelector("#loader");
const questionAreaRef = document.querySelector("#question-area");
const instructions = document.querySelector("#howToPlay");
const form = document.querySelector("#start-quiz");
const chooseLevelAreaRef = document.querySelector("#choose-level-area");
const startButton = document.querySelector("#btn-start");
const selectedLevel = document.querySelector("#selected-level");
const usernameRef = document.querySelector("#username");

const displayArea = el => el.classList.remove('hidden');
const hideArea    = el => el.classList.add('hidden');

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
 * @param {string} difficulty - adjustable setting chosen.
 * @returns {Promise<Array>} - returns a promise of formatted questions.
 * 
 * @throws {Error} throws an error if does not fetch.
 */
 async function loadQuestion(difficulty){
     const APIUrl = 'https://opentdb.com/api.php';
     const result = await fetch(`${APIUrl}?amount=10&category=22&difficulty=${difficulty}&type=multiple`);
     if (!result.ok)throw new Error('Failed to fetch questions');
     const data = await result.json();
     return data.results;
 }


  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const activeBtn = document.querySelector(".btn-difficulty.active")
    const level = activeBtn ? activeBtn.dataset.level : null;
    const myUsername = usernameRef.value.trim();

    if (myUsername && level) {
      hideArea(chooseLevelAreaRef);
      displayArea(questionAreaRef);
      selectedLevel.textContent = level;

      const questions = loadQuestion(level)
      console.log(questions)
      
    } else {
      alert("Please enter the required informations.");
    }
  });


  showInstructions()