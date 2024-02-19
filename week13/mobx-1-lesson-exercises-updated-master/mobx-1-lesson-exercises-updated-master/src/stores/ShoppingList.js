/* eslint-disable */
import { observable, action, makeObservable } from "mobx";
import { Item } from "./Item";

export class ShoppingList {
  constructor() {
    this.list = [];
    this.length = 0;
    // your code here

    makeObservable(this, {
      list: observable,
      length: observable,
      checkItem: action,
      addItem: action,
      editItem: action,
    });
  }

  checkItem = (name) => {
    let item = this.list.find((i) => i.name === name);
    item.completed = !item.completed;
  };
  addItem = (name) => {
    const item = new Item(name);
    this.list.push(item);
  };
  editItem = (name, newLocation) => {
    let item = this.list.find((i) => i.name === name);
    item.location = newLocation;
  };
  deleteItem = (name) => {
    const idx = this.list.indexOf((item) => item.name === name);
    this.list.splice(idx, 1);
  };
}
