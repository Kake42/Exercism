/**
 * An armstrong number is a number that is the sum of its own digits each raised
 * to the power of the number of digits
 * https://exercism.io/tracks/typescript/exercises/armstrong-numbers/solutions?utf8=%E2%9C%93&order=num_stars
 */
class ArmstrongNumbers {
    static numLength: number = 0;
     static isArmstrongNumber(param: number){
        let sum: number = 0;
        let numArray: number[] = param.toString().split("").map(function(t){ 
            return Math.pow(parseInt(t), param.toString().length);
           });
        ArmstrongNumbers.numLength = numArray.length;
        sum = numArray.reduce(ArmstrongNumbers.add);
        return sum === param;

    }
    static add(first: number, next: number){
        return first + next;
    }
}
export default ArmstrongNumbers;
