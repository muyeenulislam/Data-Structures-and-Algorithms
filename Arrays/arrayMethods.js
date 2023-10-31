// 4 * 4 = 16 bytes of storage
const strings = ["a", "b", "c", "d"];
strings[2];

const numbers = [1, 2, 3, 4, 5];

//push
strings.push("e"); // O(1)

//pop
strings.pop(); // O(1)
strings.pop(); // O(1)

//unshift
// 'x' will push all elements to their right
// ['x', 'a', 'b', 'c', 'd'];
//   0    1    2    3    4
strings.unshift("x"); // O(n)

//splice
strings.splice(2, 0, "alien"); // O(n)
