using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

public static class Pangram
{
    public static bool IsPangram(string input)
    {

        input = input.ToLower();
        input = Regex.Replace(input, "[^a-zA-z]", "");
        input = Regex.Replace(input, "[_]", "");
        List<char> sequence = input.OrderBy(x => x).Distinct().ToList();
        if (sequence.Count == 26)
        {
            return true;
        }
        return false;
    }
}

/* 
 * https://exercism.io/tracks/csharp/exercises/pangram/
 * solutions?utf8=%E2%9C%93&order=num_stars
 * other solutions on exercism to learn from
 * //this one is a bit more concise than my solution
var intersection = input.ToLower().ToCharArray().Intersect(alphabet);

        return intersection.Count() == 26;

    //next this one is very concises
    alphabet = "abcde.."
    return alphabet.All(text.ToLower().Contains);

    //next -- this one is a litte long
    input.ToLower().Where(letter => Char.IsLetter(letter)).GroupBy(letter => letter).Count() == 26
    */
