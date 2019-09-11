//This should transform legacy code into a more modern elegant version
//of scrabble letter scoring by doing the following:
//take in an object with key value pairs where the keys are the scores
//and the values are arrays of letters coresponding to that score
//and map into a new object where each of the letters now becomes a key
//and have a one-to-one relation with their value score;

export const transform = scrabbleScore => {
  //for every item in the scrabble score
  //if that item exists, map the letter value as a key value in a new object
  //set the value of that new key to the score (key) of that item;
  let newScore = {};
  for (var item in scrabbleScore) {
    scrabbleScore[item].forEach(function(letter) {
      newScore[letter.toLowerCase()] = +item; //use + instead of Number
    });
  }
  return newScore;
};
