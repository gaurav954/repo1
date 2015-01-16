var Account = function (name, type, openingBalance) {
    this.name = name;
    this.type = type;
    this.openingBalance = openingBalance;
}

var accGaurav = new Account("Gaurav", "saving", 100);
var accVishal = new Account("Vishal", "saving", 100);
var accVandana = new Account("Vandana", "saving", 100);
var accGaurav2 = new Account("Gaurav2", "saving", 100);
var accVishal2 = new Account("Vishal2", "saving", 100);
var accVandana2 = new Account("Vandana2", "saving", 100);

var allAccounts = [accGaurav, accVishal, accVandana, accGaurav2, accVishal2, accVandana2];

function getAllAccounts() {
    return allAccounts;
}

