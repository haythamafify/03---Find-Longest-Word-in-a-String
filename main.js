// function longest_word_in(sentence) {
//   let sentenceToArray = sentence.split(" ");
//   let count = 0;
//   let longestWord;
//   for (let index = 0; index < sentenceToArray.length; index++) {
//     if (sentenceToArray[index].length > count) {

//       count = sentenceToArray[index].length;

//       longestWord = sentenceToArray[index];

//     }

//   }
//   return longestWord;
// }

// // # Testing Ouput
// // # Tooooooooooo
// console.log(
//   longest_word_in("In Programming We Love Elzero Academy Tooooooooooo Much")
// );

// // higher order function
// function longest_word_in(sentence) {
//   let longestWord = sentence.split(" ").reduce(function (longest, current) {
//     console.log(longest);
//     console.log(current);
//     console.log("=".repeat(10));
//     return longest.length > current.length ? longest : current;
//   });
//   return longestWord;
// }

// // # Testing Ouput
// // # Tooooooooooo
// console.log(
//   longest_word_in("In Programming We Love Elzero Academy Tooooooooooo Much")
// );

// higher arrow function
function longest_word_in(sentence) {
  let longestWord = sentence
    .split(" ")
    .reduce((longest, current) =>
      longest.length > current.length ? longest : current
    );

  return longestWord;
}

// # Testing Ouput
// # Tooooooooooo
console.log(
  longest_word_in("In Programming We Love Elzero Academy Tooooooooooo Much")
);
