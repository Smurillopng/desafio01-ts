import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { TestAccount } from "./class/TestAccount";

const testAccount: TestAccount = new TestAccount("Test", 5);
const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);
const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);

console.log("-----------------\nContas criadas!\n-----------------");

console.log(testAccount);
console.log("-----------------");
console.log(peopleAccount);
console.log("-----------------");
console.log(companyAccount);

console.log("-----------------\nDepositando...\n-----------------");

console.log(testAccount.getName());
testAccount.deposit(100);
console.log("-----------------");
console.log(peopleAccount.getName());
peopleAccount.deposit(100);
console.log("-----------------");
console.log(companyAccount.getName());
companyAccount.deposit(100);

console.log("-----------------\nSacando...\n-----------------");

console.log(testAccount.getName());
testAccount.withdraw(50);
console.log("-----------------");
console.log(peopleAccount.getName());
peopleAccount.withdraw(200);
console.log("-----------------");
console.log(companyAccount.getName());
companyAccount.withdraw(50);
console.log("-----------------");
