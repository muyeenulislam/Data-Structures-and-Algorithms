// Big O(a * b) - Quadratic Time
const boxes = ["a", "b", "c", "d", "e"];
const logAllPairsOfArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    // O(a)
    for (let j = 0; j < array.length; j++) {
      // O(b)
      console.log(array[i], array[j]);
    }
  }
};

// Big O(n^2) as nested loop ran on same input
// Big O(a * b) if the nested loop ran on different inputs
logAllPairsOfArray(boxes);
