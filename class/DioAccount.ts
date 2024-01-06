export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): void => {
    this.name = name;
    console.log("Nome alterado com sucesso!");
  };

  getName = (): string => {
    return this.name;
  };

  deposit = (value: number): void => {
    if (this.validateStatus() && this.validadeValue(value)) {
      this.addBalance(value);
      console.log("Voce depositou: " + value);
      console.log("Saldo atual: " + this.balance);
    }
  };

  withdraw = (value: number): void => {
    if (this.validateStatus() && this.validadeValue(value) && this.balance >= value) {
      this.balance -= value;
      console.log("Voce sacou: " + value);
      console.log("Saldo atual: " + this.balance);
    } else {
      console.log("Saldo insuficiente");
      console.log("Saldo atual: " + this.balance);
    }
  };

  checkBalance = (): void => {
    console.log("Saldo atual: " + this.balance);
  };

  addBalance = (value: number): void => {
    if (this.validateStatus() && this.validadeValue(value)) {
      this.balance += value;
    }
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };

  private validadeValue = (value: number): number => {
    if (value > 0) {
      return value;
    }

    throw new Error("Valor inválido");
  }

  getStatus = (): boolean => {
    return this.status;
  };
}
