//an armstrong number is a number that is the sum of its
//own digist each raised to the power of the number of digits

export const validate = num => {
  //use modulus operator to get the remainder or the right most digit
  //i.e 165 % 10 gives us 160 with a remainder of 5 (or the first digit)
  //Take that digit and raise to the power of the length of the num
  //turn 160 into 16 and repeat the process
  var length = num.toString().length;
  var newNum = num;
  var result = 0;
  var remainder = 0;

  while (newNum > 0) {
    remainder = newNum % 10;
    result += Math.pow(remainder, length);
    newNum = (newNum - remainder) / 10;
  }

  if (result === num) {
    return true;
  }

  return false;
};
