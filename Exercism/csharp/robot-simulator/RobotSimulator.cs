using System;

public enum Direction
{
    North,
    East,
    South,
    West
}

public class RobotSimulator
{
    public RobotSimulator(Direction direction, int x, int y)
    {
        Direction = direction;
        X = x;
        Y = y;
    }

    public Direction Direction { get; set; }
    public int X { get; set; }
    public int Y { get; set; }

    public void Move(string instructions)
    {
        char[] steps = instructions.ToCharArray();

        foreach(char c in steps)
        {
            switch (c)
            {
                case 'R':
                    Right();
                    break;
                case 'L':
                    Left();
                    break;
                case 'A':
                    Advance();
                    break;
            }
        }
    }

    public void Right() => Direction = 
            Direction < Direction.West ? Direction + 1 : Direction.North;
    public void Left() => Direction = 
            Direction = Direction > Direction.North ? Direction - 1 : Direction.West;

    public void Advance()
    {
        switch (Direction)
        {
            case Direction.North:
                Y += 1;
                break;
            case Direction.South:
                Y -= 1;
                break;
            case Direction.West:
                X -= 1;
                break;
            case Direction.East:
                X += 1;
                break;
        }
    }
}