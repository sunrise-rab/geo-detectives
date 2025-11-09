
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