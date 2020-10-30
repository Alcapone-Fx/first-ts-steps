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
type Combinable = string | number;
//Union type
type Numeric = number | boolean;

//: number is the result of the Intersection of Combinable & Numeric 
type Universal = Combinable & Numeric;
