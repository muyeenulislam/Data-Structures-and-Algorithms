const challenge1 = () => {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < 10; i++) {
    a++; // O(n)
  }
  return a; // O(1)
};

// 1 + 1 + 1 + n + n + n
// Big O(3 + 3n)
// O(n)
console.log(challenge1());
