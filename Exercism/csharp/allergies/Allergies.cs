using System;
using System.Collections.Generic;
using System.Linq;
public enum Allergen
{
    Eggs = 1, //1
    Peanuts = 2, //2
    Shellfish = 4, //4
    Strawberries = 8, //8
    Tomatoes = 16, //16
    Chocolate = 32, //32
    Pollen = 64, //64
    Cats = 128 //128
}

public class Allergies
{
    //initialize passed in allergy score

    public int Mask { get; set; }
    public Allergies(int mask)
    {
        Mask = mask;        
    }

    public bool IsAllergicTo(Allergen allergen)
    {
        bool isAllergic = (allergen & (Allergen)Mask) == allergen;
        if (Mask == 0)
        {
            return false;
        }

        return isAllergic;
    }

    //initialize list with allergies
    public Allergen[] List()
    {
        List<Allergen> allergens = new List<Allergen>();
        foreach (Allergen food in Enum.GetValues(typeof(Allergen)))
        {
            if((food & (Allergen)Mask) > 0)
            {
                allergens.Add(food);
            }
        }
        return allergens.ToArray();
        /*
        return (Allergen[])Enum.GetValues(typeof(Allergen))
                .Cast<Allergen>()
                .Where(x => ((int)x & Mask) > 0)
                .ToArray();
                */
    }
}