function unroll(squareArray) {
  let result = [];
  let array = squareArray;

  result = [...array.shift()];

  while (array.length > 0) {
    let rowsLength = array[0].length;
    let colsLength = array.length;

    let arrCounterClock = [];
    for (let i = 0; i < rowsLength; i++) {
      let row = [];
      for (let i = 0; i < colsLength; i++) {
        row.push(array[i].pop());
      }
      arrCounterClock.push(row);
    }
    array = arrCounterClock;
    result = [...result, ...array.shift()];
  }
  return result;
}

module.exports = unroll;
