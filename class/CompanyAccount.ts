import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (loanValue: number): void => {
    if (this.getStatus() && loanValue > 0) {
      console.log("Voce pegou um empréstimo de " + loanValue);
      this.addBalance(loanValue);
      this.checkBalance();
    }
  };
}
