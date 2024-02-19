import { observable, computed, action, makeObservable } from "mobx";
import { Reservation } from "./ReservationStore";

export class RestaurantStore {
  constructor() {
    this.reservations = [];
    this.numTables = 10;

    makeObservable(this, {
      reservations: observable,
      numTables: observable,
      totalReservations: computed,
      openTables: computed,
      restPopulation: computed,
      completedTables: computed,
      addRes: action,
      seatRes: action,
      completeRes: action,
    });
  }

  get totalReservations() {
    //automatically calculates the total reservations
    return this.reservations.length;
  }
  get openTables() {
    //automatically caluclates the number of tables avalible, only when the state is affected
    let counter = 0;
    this.reservations.forEach((r) => (r.seated ? counter++ : null));
    return this.numTables - counter;
  }
  get restPopulation() {
    const numberOfPeople = this.reservations.reduce((sum, reservation) => {
      return +sum + +reservation.numPeople;
    }, 0);
    return numberOfPeople;
  }
  get completedTables() {
    //calculate the number of tables that have been completed
    return this.numTables - this.openTables;
  }
  addRes = (name, numPeople) => {
    this.reservations.push(new Reservation(name, numPeople));
  };
  seatRes = (id) => {
    const res = this.reservations.find((reservation) => reservation.id === id);
    res.seated = true;
  };
  completeRes = (id) => {
    const res = this.reservations.find((reservation) => reservation.id === id);
    res.completed = true;
  };
}
