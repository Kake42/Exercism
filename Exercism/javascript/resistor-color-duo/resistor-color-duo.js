export const value = colorCode => {
  const COLORS = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white"
  ];

  var result = "";
  colorCode.forEach(function(element) {
    if (COLORS.includes(element)) {
      result += COLORS.indexOf(element);
    }
  });
  return Number(result);
};
