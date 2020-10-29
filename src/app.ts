/**
 * Static methods and properties are accesible via Class
 * and not via instance.
 *
 * To make a property or method static simply
 * add "static" keyword to the beginning
 *
 *
 */

abstract class Department {
  // protected readonly id: string;
  // private name: string;
  protected employees: string[] = [];
  static fiscalYear = 2020;

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  /**
   * This is the signature for abstract methods within abstract classes
   * @param this: Department this must refer to a Department object
   */
  abstract describe(this: Department):void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe(){
    console.log(`Department (${this.id}): ${this.name}
    Fiscal year: ${Department.fiscalYear}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment; 
  /**
   * Getter
   */
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  /**
   * Setter
   */
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance (){
    if(this.instance){
      return this.instance
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  describe(){
    console.log(`Department (${this.id}): ${this.name}
    Fiscal year: ${Department.fiscalYear}`);
  }
}

const it = new ITDepartment("d1", ["Max"]);


it.describe();
it.name = "NEW NAME";
console.log(it);

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
accounting.describe();

console.log(accounting === accounting2);