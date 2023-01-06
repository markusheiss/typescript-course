abstract class Department {
  //   private id: string;
  //   public name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string) {
    super(id, 'IT');
  }

  describe() {
    console.log(`IT Department - ID: ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) throw new Error('Please provide a report');
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) return this.instance;
    this.instance = new AccountingDepartment('d5', []);
    return this.instance;
  }

  describe() {
    console.log(`Accounting Department - ID: ${this.id}`);
  }

  addEployee(name: string) {
    if (name === 'Max') return;
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  getReports() {
    console.log(this.reports);
  }
}

// const accounting = new Department('d1', 'Accounting');

// accounting.addEployee('Markus');
// accounting.addEployee('Stefan');
// accounting.employees[2] = 'Anna';
// accounting.describe();
// accounting.printEmployeeInformation();

// const accountingCopy = {
//   name: 'Accounting',
//   describe: accounting.describe,
// };

// accountingCopy.describe();

const itd = new ITDepartment('d2');
itd.describe();

// const accd = new AccountingDepartment('d3', []);
const accd = AccountingDepartment.getInstance();
accd.mostRecentReport = 'Report 1';
// console.log(accd.mostRecentReport);
accd.addReport('Something went wrong...');
console.log(accd.mostRecentReport);
accd.getReports();

const emp1 = Department.createEmployee('Markus');
console.log(emp1);
