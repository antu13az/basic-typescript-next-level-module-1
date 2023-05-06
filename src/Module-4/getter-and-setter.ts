class MyBankAccount {
  constructor(
    public bankId: number,
    public name: string,
    private amounts: number
  ) {}

  // getter
  get balance(): number {
    return this.amounts;
  }
  getBalance() {
    return this.amounts;
  }

//   newDeposit(newAmount: number) {
//     this.amounts = this.amounts + newAmount;
//   }

//   setter
set diposit(newa: number){
    this.amounts = this.amounts + newa
}

}

class StAccount extends MyBankAccount {
  test() {
    this.bankId;
  }
}

const getMyBankDetails = new MyBankAccount(789, "Sajal", 4000);

console.log(getMyBankDetails.balance);
getMyBankDetails.diposit = 5000
console.log(getMyBankDetails.balance);
