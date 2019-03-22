using System;

public enum Classification
{
    Perfect,
    Abundant,
    Deficient
}

public static class PerfectNumbers
{
    public static Classification Classify(int number)
    {
        if (number <= 0)
        {
            throw new System.ArgumentOutOfRangeException("Must be greater than 0.");
        }
        int sum = 0;
        for(int i = 1; i <= number/2; i++)
        {
            if(number % i == 0)
            {
                sum += i;
            }
        }
        if(sum == number)
        {
            return Classification.Perfect;
        }
        if(sum > number)
        {
            return Classification.Abundant;
        }
        if(sum < number)
        {
            return Classification.Deficient;
        }
    }
}

/*https://exercism.io/tracks/csharp/exercises/perfect-numbers/solutions?utf8=%E2%9C%93&order=num_stars
 Other solutions include breaking this into two methods
    - One which handles the returning enum case statements
    - the other which handles the factoring and which is called by the first
    - follows good rule of thumb, break into pieces which does their job well

    public static Classification Classify(int number) =>
        (Classification) Enumerable.Range(1, number - 1).Where(i => number % i == 0).Sum().CompareTo(number);
     */
