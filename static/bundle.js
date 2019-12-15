(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"selt0-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;
//extending built-in prototypes

//reverse method added to String.prototype. Reverses the string
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

//blank method to String.prototype. Test to see if string is blank, only spaces, new lines, etc.
String.prototype.blank = function() {
  return /^\s*$/.test(this);
}

//lastItem method to Array.prototype. Selects the last element itself
Array.prototype.lastItem = function() {
  return this.slice(-1)[0];
}

//Defines a Phrase object
function Phrase(content) {
  this.content = content;

  //method to return processed content for testing
  this.processedContent = function() {
    return this.letters().toLowerCase();
  }

  //method that returns only letters
  this.letters = function() {
    const lettersRegEx = /[a-z]/gi;
    return (this.content.match(lettersRegEx) || []).join("");
  }

  //method to detect palindrome
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }

  //method to make a phrase all-caps
  this.louder = function louder() {
    return this.content.toUpperCase();
  }
}

//Defines TranslatedPhrase object
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  //return translation processed for palindrome
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

//inheritance
//allows TranslatedPhrase() to inherit the methods in Phrase()
TranslatedPhrase.prototype = new Phrase();

},{}]},{},[1]);
