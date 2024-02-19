import React, { Component } from "react";
import { observer } from "mobx-react";

class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value);
  };
  editItem = () => {
    const newLocation = prompt("new location");
    this.props.store.editItem(this.props.item.name, newLocation);
  };
  deleteItem = () => {
    this.props.store.deleteItem(this.props.item.name);
  };
  render() {
    let item = this.props.item;
    return (
      <div className="">
        <input
          type="checkbox"
          value={item.name}
          checked={item.checked}
          onChange={this.checkItem}
        />
        <span className={item.completed ? "crossed" : ""}>
          {item.name + ", " + item.location}
        </span>

        <button className="editButton" onClick={this.editItem}>
          edit
        </button>

        <button className="editButton" onClick={this.deleteItem}>
          delete
        </button>
      </div>
    );
  }
}

export default observer(Item);
