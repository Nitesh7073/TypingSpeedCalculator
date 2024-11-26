// Variables to track typing speed
let startTime;
let endTime;

// Select elements
const typingBox = document.getElementById('typingBox');
const doneButton = document.getElementById('doneButton');

// Event listener to start timer on first key press
typingBox.addEventListener('keypress', function () {
  if (!startTime) {
    startTime = new Date();
  }
});

// Event listener for 'Done' button
doneButton.addEventListener('click', function () {
  if (startTime) {
    endTime = new Date();
    const timeTaken = (endTime - startTime) / 1000; // Time in seconds
    const textTyped = typingBox.value.trim();
    const wordCount = textTyped.split(/\s+/).length;

    // Calculate typing speed (words per minute)
    const wordsPerMinute = Math.round((wordCount / timeTaken) * 60);

    // Display result
    alert(`You typed ${wordCount} words in ${timeTaken.toFixed(2)} seconds. Your typing speed is ${wordsPerMinute} WPM.`);
    
    // Reset variables and input
    startTime = null;
    endTime = null;
    typingBox.value = '';
  } else {
    alert('Please start typing first!');
  }
});
