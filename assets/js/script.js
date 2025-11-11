/**
 * Hide and show Function.
 */
const displayArea = el => el.classList.remove('hidden');
 const hideArea    = el => el.classList.add('hidden');
/**
 * Function to keep the clicked button active.
 */
const buttons = document.querySelectorAll('.btn-difficulty');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // remove 'active' from all
    buttons.forEach(btn => btn.classList.remove('active'));
    // add 'active' only to the clicked one
    button.classList.add('active');
  });
});


/**
 * Function to show and hide the instruction box
 */
function showInstructions() {
    var instructions = document.getElementById("howToPlay");
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
 * @throws {Error} throws an error if does not fetch.
 */
 
 
 const loaderRef = document.querySelector("#loader");
 const questionAreaRef = document.querySelector("#question-area");

 async function loadQuestion(){
     const APIUrl = 'https://opentdb.com/api.php';
     const result = await fetch(`${APIUrl}`);
     const data = await result.json();
     console.log(data);
 }
 loadQuestion();

  /**
   * Retrieve elements from the DOM
   * Event Listner on the form submission event.
   * Hide choose Level area and display question area.
   * Username and Level selection process and alert when is either level or username missing
 */
 
const form = document.querySelector("#start-quiz");

const chooseLevelAreaRef = document.querySelector("#choose-level-area");
const startButton = document.querySelector("#btn-start");
const selectedLevel = document.querySelector("#selected-level");
const usernameRef = document.querySelector("#username");


  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const selectedLevel = document.querySelector(".btn-difficulty.active");
    const myUsername = usernameRef;

    if (myUsername.value && selectedLevel) {
      hideArea(chooseLevelAreaRef);
      displayArea(questionAreaRef);
      
    } else {
      alert("Please enter the required informations.");
    }
  });

