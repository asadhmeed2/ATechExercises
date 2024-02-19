class UniqueArray {
  constructor() {
    this.array = {};
    this.length = 0;
  }

  add(item) {
    if (!Object.hasOwnProperty.call(this.array, item)) {
      this.array[item] = this.length;
      this.length += 1;
    }
  }

  showAll() {
    console.log(Object.keys(this.array));
  }

  exists(item) {
    if (Object.hasOwnProperty.call(this.array, item)) {
      return true;
    }
    return false;
  }

  get(index) {
    const item = Object.entries(this.array).find((entry) => entry[1] === index);
    if (item) {
      return item[0];
    }
    return -1;
  }
}

const uniqueStuff = new UniqueArray();
uniqueStuff.add("toy");
uniqueStuff.showAll(); //prints ["toy"]
uniqueStuff.add("toy");
uniqueStuff.showAll(); //prints ["toy"]
console.log(uniqueStuff.exists("toy")); //returns true
uniqueStuff.add("poster");
uniqueStuff.add("hydrogen");
console.log(uniqueStuff.get(2)); //prints "hydrogen"
