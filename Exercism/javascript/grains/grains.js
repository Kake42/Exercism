//
// This is only a SKELETON file for the 'Grains' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
var bigInt = require("big-integer");

export class Grains {
  square(num) {
    //takes in the square to be calculated (1st, 2nd, 3rd square etc.)
    //raises 2 to the power of that square in a 0 index based system
    //and returns that square
    var squareTotal = bigInt(2).pow(num - 1);
    return bigInt(squareTotal).toString();
    //throw new Error("Remove this statement and implement this function");
  }

  total() {
    // var result = bigInt();
    // for (var i = 1; i <= 64; i += 1) {
    //   result = bigInt(result).add(bigInt(this.square(i)));
    // }
    // return result.toString();

    //this is quicker approach
    return bigInt(this.square(65))
      .minus(1)
      .toString();
    //throw new Error("Remove this statement and implement this function");
  }
}
