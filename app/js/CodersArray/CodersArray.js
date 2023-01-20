class CodersArray {
  length;

  constructor(...args) {
    let index = 0;
    for (const arg of args) {
      this[index] = arg;
      index++;
    }

    this.length = index;
  }

  push(...elements) {
    for (const element of elements) {
      this[this.length] = element;

      this.length++;
    }
    return this.length;
  }
}

export default CodersArray;
