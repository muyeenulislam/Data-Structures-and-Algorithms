const ascendingSort = (a, b) => a - b;
const descendingSort = (a, b) => b - a;

const mergeSortedArrays = (arr1, arr2) => arr1.concat(arr2).sort(ascendingSort);
console.log(mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]));
