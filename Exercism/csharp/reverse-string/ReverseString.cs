using System;

public static class ReverseString
{
    public static string Reverse(string input)
    {
        //char[] word = input.ToCharArray();
        //Array.Reverse(word);
        //return new string(word);

        //int l = input.Length - 1;
        string result = "";

        for (int i = input.Length - 1; i >= 0; i--)
        {
            result += input[i];
        }
        return result;
    }
}