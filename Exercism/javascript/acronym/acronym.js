//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = phrase => {
  //this should take the first letter in each word and make an acronym
  var phraseArray = phrase.split(/[\s\-\_]+/g);
  var acronym = "";
  phraseArray.forEach(element => {
    if (element[0]) acronym += element[0];
  });
  return acronym.toUpperCase();
  //throw new Error("Remove this statement and implement this function");
};
