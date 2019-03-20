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
            if (c.Equals('R'))
            {
                Direction = Direction < Direction.West ? Direction + 1 : Direction.North;

            }
            if (c.Equals('L'))
            {
                Direction = Direction > Direction.North ? Direction - 1 : Direction.West;

            }
            if (c.Equals('A'))
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
    }
}