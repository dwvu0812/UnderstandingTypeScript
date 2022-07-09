abstract class Department {
//   private name: string;
  protected employees: string[] = [];

  constructor( protected readonly id: string, public n: string) {
    // this.name = n;
  }
//   describe() {
//     console.log("Department: " + this.n);
//   }
  abstract describe(): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartmnet extends Department {
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
    }
    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
    
}

// const development = new Department("d1","Development");
// development.describe();
// development.addEmployee("Max");
// development.addEmployee("Manu");

// development.employees[2] = "Anna";

// development.printEmployeeInformation();

const it = new ITDepartmnet("d2", ["Max"]);
it.describe();

class AccountingDepartmnet extends Department {
    private lastReport: string;

    // get mostRecentReport() {
    //     if (this.lastReport) {
    //         return this.lastReport;
    //     }
    //     throw new Error("No report found!");
    // }

    // set mostRecentReport(value: string) {
    //     if (!value) {
    //         throw new Error("Please pass in a valid value!");
    //     }
    //     this.addReport(value);
    // }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[reports.length - 1];
    }
    addReport(report: string) {
        this.reports.push(report);
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(employee: string): void {
        if (employee === "Max") {
            return;
        }
        this.employees.push(employee);
    }
    describe(): void {
        console.log("Accounting Department - ID: " + this.id);
    }
}

const accounting = new AccountingDepartmnet("d3", []);
accounting.addReport("Something went wrong...");
accounting.printReports();
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.printEmployeeInformation();