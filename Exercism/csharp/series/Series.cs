using System;
using System.Collections.Generic;

public static class Series
{
    public static string[] Slices(string numbers, int sliceLength)
    {
        int j = 0;
        int offset = 0;
        string temp = "";

        List<string> NumberList = new List<string>();
        //check for wrong inputs and throw error
        if ((sliceLength > numbers.Length) || sliceLength <= 0)
        {
            throw new System.ArgumentException("Incorrect parameter(s)");
        }
        //loop through the numbers and slice segments to push to list
        while (j <= numbers.Length - sliceLength)
        {
            for (int i = 0; i < sliceLength; i++)
            {
                temp += numbers[offset + i];
                if(temp.Length == sliceLength)
                {
                    NumberList.Add(temp);
                    temp = "";
                }
            }
            j++;
            offset++;
        }
        String[] new_num = NumberList.ToArray();
        return new_num;
    }
}