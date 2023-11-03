const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "a"];

const arrToMap = (arr1) => {
  const map = {};
  arr1.map((item) => {
    if (!map[item]) {
      const item1 = item;
      map[item1] = true;
    }
  });

  return map;
};

const arrInMap = (map, arr2) => {
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
};

const containsCommonItem2 = (arr1, arr2) => {
  const map = arrToMap(arr1); //O(a)
  return arrInMap(map, arr2); //O(b)
};

// Big O(a + b) --> Big O(n)
console.log(containsCommonItem2(array1, array2));
