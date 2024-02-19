import React, { Component } from "react";
import { observer, inject } from "mobx-react";

class Reservation extends Component {
  completeRes = () => {
    this.props.RestaurantStore.completeRes(this.props.res.id);
  };
  const;
  render() {
    return (
      <div>
        <div className={this.props.res.completed ? "conditional" : ""}>
          {this.props.res.name}
        </div>

        <button onClick={this.completeRes}>complete</button>
      </div>
      //render the reservation data here
      //make sure you store the ID somewhere so you can find the reservation
      //use the class "conditional" to conditionally render completed reservations
      //You should hav ea complete reservation button to complete the reservation
    );
  }
}

//inject your store here
export default inject("RestaurantStore")(observer(Reservation));
