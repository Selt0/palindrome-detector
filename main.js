let Phrase = require("selt0-palindrome");

function palindromeDetector(e) {
  e.preventDefault();
  let phrase = new Phrase(e.target.phrase.value);
  let palindromeResult = document.querySelector("#palindromeResult");

  if (phrase.palindrome()) {
    palindromeResult.innerHTML = `"<strong>${phrase.content}</strong>" is a palindrome!`;
  } else {
    palindromeResult.innerHTML = `"<strong>${phrase.content}</strong>" is NOT a palindrome.`;
  }
}

let button = document.querySelector('#palindromeDetector');
button.addEventListener('submit', function(e) {
  palindromeDetector(e);
});