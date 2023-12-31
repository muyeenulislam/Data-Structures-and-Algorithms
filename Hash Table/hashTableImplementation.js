class HashTable {
  constructor(size) {
    this.data = new Array(size);
    // this.data = [];
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    return currentBucket
      ? currentBucket.find((item) => item[0] === key)[1]
      : undefined;
  }

  keys() {
    return this.data.filter((item) => !!item).map((item) => item[0][0]);
  }
}

const myHashTable = new HashTable(50);
console.log(myHashTable.set("grapes", 10000));
console.log(myHashTable.get("grapes"));
console.log(myHashTable.set("oranges", 54));
console.log(myHashTable.get("oranges"));
console.log(myHashTable.set("apples", 9));
console.log(myHashTable.get("apples"));
console.log(myHashTable.keys());
