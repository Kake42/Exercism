using System;
using System.Collections.Generic;
using System.Linq;

public class GradeSchool 
{
    Dictionary<string, string> roster = new Dictionary<string, string>();
    List<string> students = new List<string>();
    List<string> grades = new List<string>();

    public void Add(string student, int grade)
    {
        roster.Add(student, grade.ToString());
    }

    public IEnumerable<string> Roster()
    {
        foreach (var student in roster.OrderBy(x => x.Value).ThenBy(x => x.Key))
        {
            students.Add(student.Key);
        }
        return students;
    }

    public IEnumerable<string> Grade(int grade)
    {
         foreach (var student in roster)
         {
             if(grade.ToString() == student.Value)
             {
                 grades.Add(student.Key);
             }
         }
        grades.Sort();
        return grades;
    }
}
