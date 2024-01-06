import { DioAccount } from "./DioAccount";

export class TestAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (value: number): void => {
    if (this.getStatus() && value > 0) {
      this.addBalance(value + 10);
      console.log("Voce depositou: " + value);
      this.checkBalance();
    }
  };
}
