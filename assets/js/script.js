
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

const APILINK = `https://opentdb.com/api.php`;
const SCOREBONUS = 1;
const MAXQUESTIONS = 10;


  /**
   * Retrieve elements from the DOM
   * Event Listner on the form submission event.
   * Create Hide start area and display question area function
   * Username and Level selection process and alert when is either level or username missing
 */
 
const form = document.querySelector("#start-quiz");
const questionAreaRef = document.querySelector("#question-area");
const chooseLevelAreaRef = document.querySelector("#choose-level-area");
const startButton = document.querySelector("#btn-start");
const selectedLevel = document.querySelector("#selected-level");
const usernameRef = document.querySelector("#username");

const displayArea = el => el.classList.remove('hidden');
const hideArea    = el => el.classList.add('hidden');
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const selectedLevel = document.querySelector(".btn-difficulty.active");
    const myUsername = usernameRef;

    if (myUsername.value && selectedLevel) {
      hideArea(chooseLevelAreaRef);
      displayArea(questionAreaRef);
      await startGame(selectedLevel.dataset.level);
    } else {
      alert("Please enter the required informations.");
    }
  });

