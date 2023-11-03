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
  // for (let i = 0; i < arr1.length; i++) {
  //   if (!map[arr1[i]]) {
  //     const item = arr1[i];
  //     map[item] = true;
  //   }
  // }
  return map;
};

const arrInMap = (map, arr2) => {
  const hasCommmon = arr2.map((item) => (map[item] ? true : false));

  // for (let j = 0; j < arr2.length; j++) {
  //   if (map[arr2[j]]) {
  //     return true;
  //   }
  // }
  return hasCommmon;
};

const containsCommonItem2 = (arr1, arr2) => {
  const map = arrToMap(arr1); //O(a)
  return arrInMap(map, arr2); //O(b)
};

// Big O(a + b)
console.log(containsCommonItem2(array1, array2));
