//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

const firstRecurringCharacter1 = (input) => {
  const map = [];
  for (let i = 0; i < input.length; i++) {
    const foundItem = map.find((item) => item === input[i]);
    if (!!foundItem) return input[i];
    else map.push(input[i]);
  }
  return undefined;
};

firstRecurringCharacter1([2, 5, 1, 2, 3, 5, 1, 2, 4]);
firstRecurringCharacter1([2, 1, 1, 2, 3, 5, 1, 2, 4]);
firstRecurringCharacter1([2, 3, 4, 5]);
firstRecurringCharacter1([2, 5, 5, 2, 3, 5, 1, 2, 4]);

///////////////////////////////////////////////////

const firstRecurringCharacter2 = (input) => {
  const mySet = new Set();
  for (let i = 0; i < input.length; i++) {
    const isFound = mySet.has(input[i]);
    if (isFound) return input[i];
    else mySet.add(input[i]);
  }
  return undefined;
};

firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]);
firstRecurringCharacter2([2, 1, 1, 2, 3, 5, 1, 2, 4]);
firstRecurringCharacter2([2, 3, 4, 5]);
firstRecurringCharacter2([2, 5, 5, 2, 3, 5, 1, 2, 4]);

///////////////////////////////////////////////////

const firstRecurringCharacter3 = (input) => {
  const myMap = new Map();
  for (let i = 0; i < input.length; i++) {
    const isFound = myMap.has(input[i]);
    if (isFound) return input[i];
    else myMap.set(input[i], i);
  }
  return undefined;
};

firstRecurringCharacter3([2, 5, 1, 2, 3, 5, 1, 2, 4]);
firstRecurringCharacter3([2, 1, 1, 2, 3, 5, 1, 2, 4]);
firstRecurringCharacter3([2, 3, 4, 5]);
firstRecurringCharacter3([2, 5, 5, 2, 3, 5, 1, 2, 4]);

///////////////////////////////////////////////////

const firstRecurringCharacter4 = (input) => {
  const hashtable = {};
  for (let item of input) {
    if (!hashtable[item]) hashtable[item] = true;
    else return item;
  }
  return undefined;
};

firstRecurringCharacter4([2, 5, 1, 2, 3, 5, 1, 2, 4]);
firstRecurringCharacter4([2, 1, 1, 2, 3, 5, 1, 2, 4]);
firstRecurringCharacter4([2, 3, 4, 5]);
firstRecurringCharacter4([2, 5, 5, 2, 3, 5, 1, 2, 4]);
