using System;

public static class CollatzConjecture
{
    public static int Steps(int number)
    {
        int counter = 0;

        if (number <= 0 )
        {
            throw new System.ArgumentException("Number must be greater than 0");
        }
        while (number != 1)
        {
            if(number % 2 == 0)
            {
                number /= 2;
            }
            else
            {
                number = number * 3 + 1;
            }
            counter++;
        }
        return counter;
    }
}
/*https://exercism.io/tracks/csharp/exercises/collatz-conjecture/solutions/33630fee175f4e6c8a74d0cd0bd36dfd
 * look into extension methods
 * 
 * https://exercism.io/tracks/csharp/exercises/collatz-conjecture/solutions/83f07136fc8e4e66af11ec6b0b5273e4
 * solution that uses recursion
 */