// determin if equilateral - all sides equal
// isosceles - two sides equal
// scalene - all sides different
// check for trianle inequality
export function Triangle(x, y, z) {
  let triangle = '';
  const sides = [x, y, z];
  const compare = [z, x, y];
  const tTest = [y, z, x];
  let sum = 0;
  let counter = 0;

  this.kind = (x, y, z) => {

    // check to see if triangle
    for (let j = 0; j < sides.length; j += 1) {
      sum = sides[j] + compare[j];
      if (sides[j] === 0 || !(sum >= tTest[j])) {
        throw new Error('illegal');
      } 
    }

    for (let i = 0; i < sides.length; i += 1) {
      if (compare[i] === sides[i]) counter += 1;
    }
    if (counter === 3) triangle = 'equilateral';
    else if (counter >= 1) triangle = 'isosceles';
    else if (counter === 0) triangle = 'scalene';
    return triangle;
  }
  // return triangle;
}
