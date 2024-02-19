import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import ResInput from "./ResInput";
import Reservation from "./Reservation";

class Restaurant extends Component {
  onAddReservation = () => {
    const { name, numPeople } = this.props.GeneralStore;
    this.props.RestaurantStore.addRes(name, numPeople);
  };
  render() {
    return (
      <div>
        <span>
          You have {this.props.RestaurantStore.openTables} open tables
        </span>
        {/* Add in # of people in restaurant */}
        <br />
        <span>
          You have {this.props.RestaurantStore.restPopulation} people in
          restaurant
        </span>

        <br />

        <span>
          You have {this.props.RestaurantStore.completedTables} completed tables
        </span>

        {/* Add in # of completed tables with id "completedTables*/}
        <ResInput />
        <button id="addRes" onClick={this.onAddReservation}>
          Add Reservation
        </button>
        {/* Make the Add Reservation button work */}
        <div className="reservations">
          {/* Map reservation data to Reservation components here */}
          {this.props.RestaurantStore.reservations.map((res) => (
            <Reservation key={res.id} res={res} />
          ))}
        </div>
      </div>
    );
  }
}

export default inject("GeneralStore", "RestaurantStore")(observer(Restaurant));
