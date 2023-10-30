// Big O(n + n^2)
// Drop Non Dominants -> Big O(n^2)
const printAllNumbersThenAllPairSums = (numbers) => {
  // O(n)
  console.log("these are the numbers:");
  numbers.forEach((number) => console.log(number));

  // O(n^2)
  console.log("and these are their sums:");
  numbers.forEach((firstNumber) =>
    numbers.forEach((secondNumber) => console.log(firstNumber + secondNumber))
  );
};

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]);
