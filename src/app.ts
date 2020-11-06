/*
 * Interception types allow us to combine our types
 * Interception types basically is the conjunction of many types
 *
 * Interfaces could be used as interception types, but is more code
 * and not too much used
 */

//Object type
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

//Combination of the object properties
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Felix",
  privileges: ["create-server"],
  startDate: new Date(),
};

//Union type
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(employee: UnknownEmployee) {
  console.log(`Name: ${employee.name}`);
  /*
   * Type guard
   */
  if ("privileges" in employee) {
    console.log(`Privileges: ${employee.privileges}`);
  }
  if ("startDate" in employee) {
    console.log(`Start Date: ${employee.startDate}`);
  }
}

printEmployeeInformation(e1);
printEmployeeInformation({ name: "Kratos", startDate: new Date() });

/*
 * Our type guard on classes is the instace of
 */
class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving...");
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo...${amount}`);
  }
}

type Vehicle = Car | Truck;

const vehicle1 = new Car();
const vehicle2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  //type guard
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(100);
  }
}

useVehicle(vehicle1);
useVehicle(vehicle2);

//Union type
type Combinable = string | number;
//Union type
type Numeric = number | boolean;

//: number is the result of the Intersection of Combinable & Numeric
type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  /*
   * Type Guards help us with union types
   * Help us to use the flexibility of union types and
   * ensure that our code runs correctly at runtime
   */
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  } else {
    return a + b;
  }
}

/*
 * Discriminated Unions it's a pattern that help us to know
 * and to be confident what type of object we want to work with
 * The interfaces has a the same property but different type
 */
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;

  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }

  console.log(`Moving at speed: ${speed}`);
}

moveAnimal({ type: "horse", runningSpeed: 10 });
moveAnimal({ type: "bird", flyingSpeed: 15 });

/*
 * Type Casting
 */

// keyword as to casting or angle brackets
//const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// TS undestands that ! never returns null
const userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement;

userInputElement.value = "Hi there!!!";

// Alternative to !
// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = "Hi there!";
// }

/*
 * Index Properties 
 */

interface IErrorContainer {
  /*
   * We don't know how many properties would have and we don't know
   * the properties name, so we tell to TS that properties must be 
   * string type 
   * 
   */
  [prop: string]: string
}

const errorBag: IErrorContainer ={
  email: 'Not valid email',
  1: 'hey'
}