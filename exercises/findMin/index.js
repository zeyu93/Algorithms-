const findMin = nums => {
  let left = 0;
  let right = nums.length - 1;

  while (left !== right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
    console.log(left, right)
  }
  return nums[left];
};

findMin([2, 3, 4, 5, 1]);
