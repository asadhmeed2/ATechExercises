import { Hobby } from "./Hobby";
import { IPerson } from "./Person.interface";

export class Person implements IPerson {
  name: string;
  age: number;
  height: number;
  hobbies: Hobby[];
  weight: number;

  constructor(
    name: string,
    age: number,
    height: number,
    weight: number,
    hobbies: Hobby[]
  ) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.hobbies = hobbies;
  }

  grow(): void {
    this.age += 1;
  }
  loseWeight(weight: number): void {
    this.weight -= weight;
  }
  addHobby(hobby: Hobby): void {
    this.hobbies.push(hobby);
  }

  getHobbiesNames(): string[] {
    return this.hobbies.map((hobby) => hobby.hobbyName);
  }
}
