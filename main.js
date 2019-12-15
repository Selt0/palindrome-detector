let Phrase = require("selt0-palindrome");

let string = prompt("Please enter a string for palindrome testing: ");

let phrase = new Phrase(string);

if (phrase.palindrome()) {
  alert(`"${phrase.content}" is a palindrome!`);
} else {
  alert(`"${phrase.content}" is NOT a palindrome.`);
}