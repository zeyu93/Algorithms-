const zombies = matrix => {
  let humans = 0;
  let queue = [];
  let hour = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        humans++;
      }
      if (matrix[i][j] === 1) {
        queue.push([i, j]);
      }
    }
  }
  console.log('humans', humans)
  console.log('queue', queue)
  //direction Rows / Cols
  let dR = [0, -1.0, 1];
  let dC = [1, 0, -1, 0];
  while (queue.length && humans) {
    let nextHour = [];
    while (queue.length) {
      let current = queue.shift();
      for (let i = 0; i < 4; i++) {
        let nR = current[0] + dR[i];
        let nC = current[1] + dC[i];
        if (nR >= 0 && nC >= 0 && nR < matrix.length && nC < matrix[0].length) {
          // it is a human
          if (matrix[nR][nC] === 0) {
            humans--
            matrix[nR][nC] = 1;
            nextHour.push([nR, nC]);
          }
        }
      }
    }
    hour++;
    queue = nextHour;
  }
  console.log(hour);
  return hour;
};

zombies([
  [0, 1, 1, 0, 1],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 1],
  [0, 1, 0, 0, 0]
]);
