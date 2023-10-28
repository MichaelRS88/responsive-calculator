// Define a function to handle keyboard events
function handleKeyPress(event) {
  const key = event.key; // Get the pressed key

  // Check if the pressed key is "C" (case-insensitive)
  if (key.toLowerCase() === 'c') {
    clearResult(); // Call the clearResult function
  } else if (/[\d\+\-\*\/]/.test(key)) {
    appendToResult(key);
  } else if (key === '=' || key === 'Enter') {
    calculateResult();
  }
}

// Add an event listener to the document to listen for keydown events
document.addEventListener('keydown', handleKeyPress);

let result = document.getElementById("result");

function appendToResult(value) {
  result.value += value;
}

function clearResult() {
  result.value = "";
}

function calculateResult() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = "Error";
  }
}
