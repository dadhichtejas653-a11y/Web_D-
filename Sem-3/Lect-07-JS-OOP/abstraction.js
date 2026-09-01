class BankAccount {
  account_type;
  #balance = 1000;

  constructor(account_type, balance) {
    this.account_type = account_type;
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#balance -= amount;
  }


  getBalance() {
    return this.#balance;
  }
}
const vikas = new BankAccount("Saving", 1000);
vikas.withdraw(500);
vikas.deposit(1000);
console.log(vikas.getBalance()); // 1500
// vikas.#balance=90;
console.log(vikas.getBalance()); // 1500
// savingaccount.deposit(500);
// console.log(savingaccount.getBalance()); // 1500
// savingaccount.#balance = 2000; // This will throw an error because #balance is private