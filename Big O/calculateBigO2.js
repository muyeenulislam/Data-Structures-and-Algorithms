const anotherFunChallenge = (input) => {
  let a = 5; //O(1)
  let b = 10; //O(1)
  let c = 50; //O(1)
  for (let i = 0; i < input; i++) {
    let x = i + 1; //O(n)
    let y = i + 2; //O(n)
    let z = i + 3; //O(n)
  }
  for (let j = 0; j < input; j++) {
    let p = j * 2; //O(n)
    let q = j * 2; //O(n)
  }
};

// Big O(3 + 5n)
// Big O(n)
anotherFunChallenge(5);
