// boxes, boxes2 are 2 different terms for inputs
// Big O(a + b)
const compressBoxesTwice = (boxes, boxes2) => {
  boxes.forEach((box) => console.log(box)); // O(a)
  boxes2.forEach((box) => console.log(box)); // O(b)
};

compressBoxesTwice([1, 2, 3], [4, 5]);
