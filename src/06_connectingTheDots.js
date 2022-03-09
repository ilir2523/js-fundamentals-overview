/**
 * Finally, we will test your wit and angineering mindset.
 */

// You have a bunch of bank accounts:
// Bank of America, with 500 EUR,
// Bank of Tirana, with 1000 EUR,
// Bank of England, with 69 EUR,
// HSBC with 100 EUR,
// Bank of Italy with 200 EUR.

// You want to keep track of your money. To do that:
// 1. Store all the information in the most appropriate JS data structure you can think of.
// Note: You may want to add a unique identifier to each account.
const accounts = [
    {
        id: 1,
        bank: 'Bank of America',
        balance: 500
    },
    {
        id: 2,
        bank: 'Bank of Tirana',
        balance: 1000
    },
    {
        id: 3,
        bank: 'Bank of England',
        balance: 69
    },
    {
        id: 4,
        bank: 'HSBC',
        balance: 100
    },
    {
        id: 5,
        bank: 'Bank of Italy',
        balance: 200
    }
]

// Now, without directly typing the data:
// 2. Find a way to find out how much money is in a selected account.
function findBalanceOfAccount(id) {
    const account = accounts.find(account => account.id === id)
    return account.balance
}
console.log(`Balance: ${findBalanceOfAccount(3)} EUR`)

// 3. Find a way to find out how much money you have in total.
function getTotal() {
    let total = 0
    accounts.map(account => total += account.balance)
    return total
}
console.log(`Total: ${getTotal()} EUR`)

// 4. Find a way to add money to a selected account.
function addMoneyToAccount(id, money) {
    const account = accounts.find(account => account.id === id)
    const newBalance = account.balance + money
    account.balance = newBalance
}
addMoneyToAccount(3, 300)
console.log(`New Balance: ${findBalanceOfAccount(3)} EUR`)
// 4.1 And subtract too.
function withdrowMoneyFromAccount(id, money) {
    const account = accounts.find(account => account.id === id)
    const newBalance = account.balance - money
    account.balance = newBalance
}
withdrowMoneyFromAccount(3, 300)
console.log(`New Balance: ${findBalanceOfAccount(3)} EUR`)

// 5. Each bank account has an account number. For this exercise, an account number is a 5 digit integer.
// Find a way to add that information into the existing shape.
accounts.map(account => account.accountNumber = account.id + 10000)
console.log(accounts)