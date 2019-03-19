using System;
using System.Linq;

public class DndCharacter
{
    public int Strength { get; set; }
    public int Dexterity { get; set; }
    public int Constitution { get; set; }
    public int Intelligence { get; set; }
    public int Wisdom { get; set; }
    public int Charisma { get; set; }
    public int Hitpoints { get; set; }

    public static int Modifier(int score)
    {
        double mod = 0;
        if (score < 10)
        {
            mod = (10 - score) / 2.0;
            mod = Math.Ceiling(mod / 1) * 1;
            mod = -mod;
        }
        if (10 <= score)
        {
            mod = (score - 10) / 2.0;
        }

        return (int)mod;
    }

    public static int Ability() 
    {
        //roll 4 6 sided dice
        //discard the dice with the least value
        //record the sum of the largest three
        Random dice = new Random();
        int[] rolls = new int[4];
        int sum = 0;
        int die; 

        for (int i = 0; i < rolls.Length; i++)
        {
            die = dice.Next(1, 6);
            rolls[i] = die;
        }
        rolls = rolls.OrderByDescending(x => x).ToArray();

        for(int i = 0; i < 3; i++)
        {
            sum += rolls[i];
        }
        return sum;
    }

    public static DndCharacter Generate()
    {
        int constit = Ability();

        DndCharacter character = new DndCharacter
        {
            Strength = Ability(),
            Dexterity = Ability(),
            Constitution = constit,
            Intelligence = Ability(),
            Wisdom = Ability(),
            Charisma = Ability(),
            Hitpoints = 10 + Modifier(constit)
        };

        return character;
    }
}
