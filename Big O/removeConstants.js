// remove the constants and focus on the bigger picture
// Big O(1 + n/2 + 100)
// Big O(n/2 + 101)
// Big O(n/2)
// Big O(n)
const printFirstItemThenFirstHalfThenSayHi100Times = (items) => {
  // O(1)
  console.log(items[0]);

  const middleIndex = Math.floor(items.length / 2);
  const index = 0;

  // O(n/2)
  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  // O(100)
  for (let i = 0; i < 100; i++) {
    console.log("hi");
  }
};
