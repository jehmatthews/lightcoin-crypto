class Account {

  constructor(username) {
    this.username = username;
    // Have the acct bal. stat at $0
    this.balance = 0;
  }
}

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.value;
  }
}
class Deposit extends Transaction {

  get value() {
    return this.amount;
  }

}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account('Jordo');

const t1 = new Deposit(100.00, myAccount);
t1.commit();

console.log('Balance is:', myAccount.balance);

const t2 = new Withdrawal(10.00, myAccount);
t2.commit();

console.log('Balance is:', myAccount.balance)
