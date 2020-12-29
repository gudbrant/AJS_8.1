export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(obj) {
    //if (this.members.has(obj) === false)
    if (!this.members.has(obj)) {
      this.members.add(obj);
    } else throw new Error('Этот персонаж уже есть в команде!');
  }

  addAll(...allCharacters) {
    for (let i = 0; i < allCharacters.length; i += 1) {
      if (this.members.has(allCharacters[i]) === false) {
        this.members.add(allCharacters[i]);
      }
    }
  }

  toArray() {
    this.members = Array.from(this.members);
  }
}
