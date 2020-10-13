export class Random {
  static getNumber(from, to) {
    const max = Math.max(from, to);
    const min = Math.min(from, to);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static getArrayElement(array) {
    return array[this.getNumber(0, array.length - 1)];
  }

  static getBoolean() {
    return !!this.getNumber(0, 1);
  }

  static getDate(date, daysRange) {
    const result = new Date(date);
    const days = this.getNumber(1, daysRange);
    addDaysToDate(result, days);
    return result;
  }

  static getArrayElements(array, number) {
    let result = [];

    if (array.length === 0) {
      throw new Error(`Empty array`);
    }

    while (result.length < number) {
      let element = this.getArrayElement(array);
      if (result.indexOf(element) < 0 || result.length === array.length) {
        result.push(element);
      }
    }
    return result;
  }

  static getObjectProperty(object) {
    const propertyName = this.getArrayElement(Object.keys(object));
    return object[propertyName];
  }

}

const addDaysToDate = (date, days)=>{
  date.setDate(date.getDate() + days);
};
