using System;
using System.Linq;
using System.Collections.Generic;

public static class Hamming
{
    public static int Distance(string firstStrand, string secondStrand)
    {
        int difference = 0;

        if (firstStrand.Equals(secondStrand))
        {
            return difference;
        }
        if(firstStrand.Length != secondStrand.Length)
        {
            throw new System.ArgumentException("Strings must be of same length");
        }
        for (int i = 0; i < firstStrand.Length; i++)
        {
            if (firstStrand[i] != secondStrand[i])
            {
                difference++;
            }
        }
        return difference;

    }
}