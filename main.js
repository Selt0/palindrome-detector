let Phrase = require("selt0-palindrome");

function palindromeDetector() {
  let string = prompt("Please enter a string for palindrome testing: ");

  let phrase = new Phrase(string);

  if (phrase.palindrome()) {
    alert(`"${phrase.content}" is a palindrome!`);
  } else {
    alert(`"${phrase.content}" is NOT a palindrome.`);
  }
}

let button = document.querySelector('#palindromeDetector');
button.addEventListener('click', function() {
  palindromeDetector();
});