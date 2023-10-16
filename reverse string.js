function reverseWords(str) {
  let words = str.split(' ');
  let reversedWords = words.map(function(word) {
    return word.split('').reverse().join('');
  });
  let result = reversedWords.join(' ');
  return result;
}
let sentence = prompt("enter string");
let reversedSentence = reverseWords(sentence);
console.log(reversedSentence);