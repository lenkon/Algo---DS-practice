module.exports = function (sec = 6000000) {
  // write your code here
  if (sec === 0) {
    return "0 sec";
  }

  const units = [
    { unit: "wk", divisor: 7 * 24 * 60 * 60 },
    { unit: "d", divisor: 24 * 60 * 60 },
    { unit: "hr", divisor: 60 * 60 },
    { unit: "min", divisor: 60 },
    { unit: "sec", divisor: 1 },
  ];

  const parts = [];
  for (const unit of units) {
    const value = Math.floor(sec / unit.divisor);
    if (value > 0) {
      parts.push(`${value} ${unit.unit}`);
      sec %= unit.divisor;
    }
  }
  console.log("Duration: ", parts.join(", "));

  return parts.join(", ");
}
