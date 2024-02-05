import { IHobby } from "./Hobby.interface";

export class Hobby implements IHobby {
  hobbyName: string;
  yearsInHobby: number;

  constructor(hobbyName: string, yearsInHobby: number) {
    this.hobbyName = hobbyName;
    this.yearsInHobby = yearsInHobby;
  }
}
