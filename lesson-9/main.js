function convertBoolean(param) {
  console.log(
    typeof param === "boolean"
      ? param
        ? "Правда"
        : "Ложь"
      : "This is not a boolean!"
  );
}

function convertToNegative(param) {
  console.log(
    typeof param === "number"
      ? convertToNegativeWithZeroCheck(param)
      : "This is not a number!"
  );
}

function convertToNegativeWithZeroCheck(param) {
  return param < 0 ? param : param == 0 ? 0 : -param;
}

function getCarRentPrice(days) {
  let pricePerDay = 40;
  if (days >= 3 && days < 7) {
    return pricePerDay * days - 20;
  } else if (days >= 7) {
    return pricePerDay * days - 50;
  } else {
    return pricePerDay * days;
  }
}
