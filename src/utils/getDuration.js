const getSize = seconds => {
  const abb = ["sec", "min", "hr"];
  var i = 0;
  var time = seconds;
  while (time > 60 && i < 2) {
    i++;
    time = time / 60;
  }
  return Math.round(time * 10) / 10 + " " + abb[i];
};

export default getSize;
