using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

public static class NucleotideCount
{
    public static IDictionary<char, int> Count(string sequence)
    {
        Dictionary<char, int> dna = new Dictionary<char, int>();
        Regex regex = new Regex("^[ACGT\\s]*$");

        if (!(regex.Match(sequence)).Success)
        {
            throw new System.ArgumentException("Invalid string");
        }
        char[] seq = sequence.ToCharArray();
        int adenine = seq.Count(s => s == 'A');
        int cytosine = seq.Count(s => s == 'C');
        int guanine = seq.Count(s => s == 'G');
        int thymine = seq.Count(s => s == 'T');

        dna.Add('A', adenine);
        dna.Add('C', cytosine);
        dna.Add('G', guanine);
        dna.Add('T', thymine);

        return dna;
    }
}