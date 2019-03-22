using System;
using System.Collections.Generic;
using System.Linq;

public static class ScrabbleScore
{
    public static int Score(string input)
    {
        int sum = 0;
        input = input.ToUpper();

        Dictionary<int, List<string>> alphabet = new Dictionary<int, List<string>>
        {
            {1, new List<string> {"A","E","I", "O", "U", "L", "N", "R", "S", "T"} },
            {2, new List<string> { "D", "G",} },
            {3, new List<string> { "B", "C", "M", "P"} },
            {4, new List<string> { "F", "H", "V", "W", "Y"} },
            {5, new List<string> { "K"} },
            {8, new List<string> { "J", "X"} },
            {10, new List<string> { "Q", "Z"} }

        };

        for (int i = 0; i < input.Length; i++)
         {
            string temp = input[i].ToString();
            if (alphabet.Values.Any(x => x.Contains(temp)))
            {
                sum += alphabet.FirstOrDefault(x => x.Value.Contains(temp)).Key;;
            }
         }
        return sum;
    }
}

/*https://exercism.io/tracks/csharp/exercises/scrabble-score/solutions/707c5e28964d380b4bdb20ae
 Should write code to account for use cases that it shouldnt excpet such as
 If the user puts in anything but a letter, then it should throw an error
 Look for ways to handle different errors even if not specified in given test

    Comments found on other solutions:
    - store word calculated (cache result) -> prevent calculating score multiple times for same word
    - calculate score in constructor and store

    Could have done a char int dictionary
    input.ToLower().Sum(x => dictionary[x]);
     */