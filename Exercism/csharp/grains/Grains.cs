using System;

public static class Grains
{
    public static ulong Square(int n)
    {
        if(n <= 0 || n > 64)
        {
            throw new System.ArgumentOutOfRangeException("no");
        }
        string binary = "1";
        for(int i = 1; i < n; i++)
        {
            binary += "0";
        }
        var result = Convert.ToUInt64(binary, 2);
        return result;
    }

    public static ulong Total()
    {
        ulong total = 0;
         for(double i = 0; i < 64; i++)
         {
            // var temp = i + i;
             total = total + (ulong)Math.Pow(2, i);
         }
        return total;
    }
}