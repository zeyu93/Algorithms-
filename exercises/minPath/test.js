const minPathSum = require("./index");

test("palindrome function is defined", () => {
  expect(typeof minPathSum).toEqual("function");
});

test("min path of [[1, 3],[1, 5],[4, 2]] is 8", () => {
  const m = [
    [1, 3],
    [1, 5],
    [4, 2]
  ];
  expect(minPathSum(m)).toEqual(8);
});

[
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
];
test("min path of [[1, 3, 1],[1, 5, 1],[4, 2, 1]]", () => {
  const m = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
  ];
  expect(minPathSum(m)).toEqual(7);
});
