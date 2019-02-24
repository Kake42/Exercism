using System;

public static class ResistorColor
{
    static string[] colors = { "black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"};
    public static int ColorCode(string color)
    {
        int code = Array.IndexOf(colors, color);
        return code;
    }

    public static string[] Colors()
    {
        return colors;
    }
}