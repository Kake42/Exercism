class DifferenceOfSquaresCalculator {

    int computeSquareOfSumTo(int input) {
        int SquareofSum = 0;
        for(int i = 1; i <= input; i++){
            SquareofSum += i;
        }

        return (SquareofSum * SquareofSum);
    }

    int computeSumOfSquaresTo(int input) {
        int SumofSquare = 0;
        for(int i = 1; i <= input; i++){
            SumofSquare += (i*i);
        }

        return SumofSquare;
    }

    int computeDifferenceOfSquares(int input) {

        int result = computeSquareOfSumTo(input) - computeSumOfSquaresTo(input);
        return result;
    }

}

/* different solution to learn from :
 https://exercism.io/tracks/java/exercises/difference-of-squares/
 solutions/1e91f9c092b743e5bdbedc3daaea0803
public static int computeSquareOfSumTo(int n) {
        return (int) Math.pow(IntStream.rangeClosed(1, n).sum(), 2);
    }

    public static int computeSumOfSquaresTo(int n) {
        return IntStream.rangeClosed(1, n).map(i -> i*i).sum();
    }

    public static int betweenSquareOfSumAndSumOfSquaresTo(int n) {
        return Math.abs(computeSquareOfSumTo(n) - computeSumOfSquaresTo(n));
    }
*/