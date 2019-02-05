using System;

  public static class TwoFer
  {
      public static string Name(string input = null)
      {
        string Name;
        if (input == null) input = "you";
        Name = ($"One for {input}, one for me.");
        return Name;
      }
  }
