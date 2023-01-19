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
}

export default CodersArray;
