using System;
using System.Text;
using System.Collections.Generic;
using System.Reflection;

//generate random unique name for each new robot
public class Robot
{
    Random random = new Random();
    private static List<string> names = new List<string>();

    public string Name  { get; set; }

    public Robot()
    {
        SetName();
    }

    public void Reset()
    {
        SetName();
    }

    public void SetName()
    {
        int RoboSeq = random.Next(100, 999);
        do
        {
            this.Name = "";
            char first = Convert.ToChar(random.Next(0, 25) + 65);
            char second = Convert.ToChar(random.Next(0, 25) + 65);

            this.Name += first;
            this.Name += second;
            this.Name += RoboSeq.ToString();

        } while (names.Contains(this.Name));
        names.Add(this.Name);

    }
}

