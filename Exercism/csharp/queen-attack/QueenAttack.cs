using System;

public class Queen
{
    public Queen(int row, int column)
    {
        Row = row;
        Column = column;
    }

    public int Row { get; }
    public int Column { get; }
}

public static class QueenAttack
{
    public static bool CanAttack(Queen white, Queen black)
    {
        if (white.Column.Equals(black.Column) || white.Row.Equals(black.Row))
        {
            return true;
        }
        if(Math.Abs(white.Column - black.Column).Equals(Math.Abs(white.Row - black.Row)))
        {
            return true;
        }
        return false;
    }

    public static Queen Create(int row, int column)
    {
        if(row < 0 || column < 0 || row >= 8 || column >= 8)
        {
            throw new System.ArgumentOutOfRangeException("Coordinates must be greater than 0");
        }
        Queen queen = new Queen(row, column);
        return queen;
    }
}
/*
 * https://exercism.io/tracks/csharp/exercises/queen-attack/solutions/7af709200511490287c2c91f09aae639
 * could have set variable to account for columns and rows to make more readable
 * columndiff = white.column - black.column
 * rowdiff = white.row - black.row
 * then compare those and return
 * return columndiff == rowdiff
 * */