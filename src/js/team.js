export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(obj) {
    for (const value of this.members) {
      for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
          if (value[key] === obj[key]) {
            throw new Error('Персонаж уже добавлен');
          }
        }
      }
    }
    return this.members.add(obj);
  }

  addAll(array) {
    array.forEach((item) => {
      this.members.add(item);
    });
    return this.members;
  }

  toArray() {
    return Array.from(this.members);
  }
}
