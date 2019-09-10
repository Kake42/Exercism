//pangrams are sentences or phrases that contain atleast
//one of every character in the english alphabet

export const isPangram = phrase => {
  // throw new Error("Remove this statement and implement this function");
  var phraseArr = phrase
    .toLowerCase()
    .split(/[^a-z]|\s*/)
    .sort();

  var resultPhrase = Array.from(new Set(phraseArr)).join("");
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  if (resultPhrase.match(alphabet)) {
    return true;
  }

  return false;
};
