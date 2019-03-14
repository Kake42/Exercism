using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

public class HighScores
{//set this highscore to pass in list
    List<int> curlist;
    public HighScores(List<int> list)
    {
        curlist = list;

    }

    public List<int> Scores()
    {
        return curlist;
    }

    public int Latest()
    {
        return curlist.Last();
        //throw new NotImplementedException();
    }
    //return best score
    public int PersonalBest()
    {
        return curlist.Max();
    }
    //return top 3 scores
    public List<int> PersonalTopThree()
    {
        return curlist.OrderByDescending(x=>x).Take(3).ToList();
    }
}