const timeToInt = string => {
  const [hours, mins] = string.split(":");
  return Number.parseInt(hours) * 60 + Number.parseInt(mins);
};
// ["00:03", "23:59", "12:03"]

const timeDifference = times => {
  let seenArray = new Array(60 * 24).fill(false);
  for (let i = 0; i < times.length; i++) {
    let currentTime = timeToInt(times[i]);
    // already exist
    if (seenArray[currentTime]) {
      return 0;
    }
    seenArray[currentTime] = true;
  }
  let prev = -1;
  let min = Infinity;
  let first = -1;
  for (let i = 0; i < seenArray.length; i++) {
    if (seenArray[i]) {
      if (prev !== -1) {
        min = Math.min(min, i - prev);
      } else {
        first = i;
      }
      prev = i;
    }
  }
  min = Math.min(min, first + 1440 - prev);
  console.log(min);
  return min;
};

const isPower9 = (num) =>{
  if(num < 0) return false
  if(num === 0) return true
  while(num !== 1){
    if(num % 3 !==0){
      return false
    }
    num = num /3
  }

  return true



}


console.log(isPower9(81))
// timeDifference(["00:03", "23:59", "12:03"]);
