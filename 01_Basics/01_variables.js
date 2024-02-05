const accountId = 34824738
let accountEmail = "hulash@google.com"
var accountPassword = "147852369"
accountCity = "Gaya"
let accountState;

// accountId = 3243 // not allowed as we cannot modify a constant
accountEmail = "hk@google.com"
accountPassword = "369852147"
accountCity = "Bengaluru"

/*
Prefer not to use var because of
issue with block scope or functional scope
*/
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
