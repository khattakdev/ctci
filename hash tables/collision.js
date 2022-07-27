class HashTable {
  constructor(size = 51) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = total * WEIRD_PRIME + value;
    }

    return total % this.keyMap.length;
  }
  /*
  1. Accepts a Key and a value
  2. Hashes the Key
  3. Store the key-value pair in the hash table array via separate chaining
  */
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
    return index;
  }

  /*
  1. Accepts a key
  2. Hashes the key
  3. Retrives the key-value pair in the hash table
  4. If the key isn't found, return undefined
  */
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (ket == this.keyMap[index][i][0]) {
          return this.keyMap[index][i];
        }
      }
    }

    return undefined;
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1]))
            valuesArr.push(this.keyMap[i][j][1]);
        }
        console.log(this.keyMap[i]);
      }
    }
    return valuesArr;
  }
}

let ht = new HashTable();
// Key , Value
ht.set("hello world", "goodBye!!");
