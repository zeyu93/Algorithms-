function minimumBribes(q) {
  let result = 0;
  for (let i = q.length - 1; i >= 0; i--) {
    let originalNum = i + 1;
    let currentNum = q[i];
    //if the current num is smaller than original num
    if (currentNum < originalNum) {
      if (originalNum - currentNum > 2) {re
        console.log("Too Chaotic");
        return;
      }
      if (originalNum - currentNum === 2) {
        result++;
      } else {
        continue;
      }
    } else if (currentNum > originalNum) {
      if (currentNum - originalNum > 2) {
        console.log("Too Chaotic");
        return;
      }
      result += currentNum - originalNum;
    }
  }
  console.log(result);
  return result;
}

minimumBribes([2, 5, 1, 3, 4]);
