function Squares(num){
    this.num =num;
    var squareOfSum = 0;
    var sumOfSquares = 0;
    var difference = 0;

    for (let i = 1; i <= this.num; i++){
        squareOfSum += i;
    }
    squareOfSum *= squareOfSum;
    this.squareOfSum = squareOfSum;

    for (let j = 1; j <= this.num; j++){
        sumOfSquares += (j*j);
    }
    this.sumOfSquares = sumOfSquares;
 
    difference = squareOfSum - sumOfSquares;
    this.difference = difference;
}

export default Squares;