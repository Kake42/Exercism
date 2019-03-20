using System;

public static class Proverb
{
    public static string[] Recite(string[] subjects)
    {
        string[] result = new string[subjects.Length];
        if(subjects.Length == 0)
        {
            return subjects;
        }

        for (int i = 0; i < subjects.Length - 1; i++)
        {
            string test = String.Format("For want of a {0} the {1} was lost.", 
                        subjects[i], subjects[i+1]);
            result[i] = test;
        }
        result[result.Length-1] = String.Format("And all for the want of a {0}.", subjects[0]);
        return result;
    }
}