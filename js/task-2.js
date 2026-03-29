class Storage {
  #items;

  constructor(initialItems) {
    this.#items = initialItems;
  }
  getItems() {
    return this.#items;
  }
  addItem(newItem) {
    this.#items.push(newItem);
  }
  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }
  // alternative with indexOf & splice:
  // removeItem(itemToRemove) {
  // const index = this.#items.indexOf(itemToRemove);
  // if (index !== -1) {
  // this.#items.splice(index, 1);
  // }
  // }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems());

storage.addItem('Droid');
console.log(storage.getItems());

storage.removeItem('Prolonger');
console.log(storage.getItems());

storage.removeItem('Scaner');
console.log(storage.getItems());
