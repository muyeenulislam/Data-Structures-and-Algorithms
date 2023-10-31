const reverse1 = (str = "") => {
  if (!str || typeof str != "string" || str.length < 2) return str;

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join("");
};

const reverse2 = (str = "") => str.split("").reverse().join("");
const reverse3 = (str = "") => [...str].reverse().join("");

console.log(reverse1("Timbits Hi"));
console.log(reverse2("Timbits Hi"));
console.log(reverse3("Timbits Hi"));
