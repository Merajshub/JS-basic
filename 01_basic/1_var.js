const accountId = 123;
let accountEmail = "xyz@gmail.com";
var accountPass = "12345";
let accountState;

// var prefer not to use, because of issue in block scope functional scope.

console.log(typeof(accountId))
console.log(accountId);

console.table([accountId,accountEmail,accountPass,accountState]);