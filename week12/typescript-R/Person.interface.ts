import { Hobby } from "./Hobby";

export interface IPerson {
  name: string;
  age: number;
  height: number;
  hobbies: Hobby[];
  weight: number;

  grow(): void;
  loseWeight(weight: number): void;
  addHobby(hobby: Hobby): void;
  getHobbiesNames(): string[];
}
