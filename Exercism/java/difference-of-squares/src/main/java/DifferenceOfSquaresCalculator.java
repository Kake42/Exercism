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
        //throw new UnsupportedOperationException("Delete this statement and write your own implementation.");
    }

}
