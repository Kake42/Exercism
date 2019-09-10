//given a planet, and an age in seconds
//calculate how old someone would be on that planet
export const age = (planet, time) => {
  //60 seconds in a minute
  //60 min in an hour
  //24 hrs in a day
  //365.25 days in a year

  var EarthYears = {
    Mercury: 0.2408467,
    Venus: 0.61519726,
    Earth: 1,
    Mars: 1.8808158,
    Jupiter: 11.862615,
    Saturn: 29.447498,
    Uranus: 84.016846,
    Neptune: 164.79132
  };

  var age = time / 365.25 / 24 / 60 / 60;
  for (var item in EarthYears) {
    if (EarthYears.hasOwnProperty(item)) {
      if (item.match(new RegExp(planet, "i"))) {
        return Math.round((age /= EarthYears[item]) * 100) / 100;
      }
    }
  }
};
