// 3. Const and Let

let user = "jed";

let inbox1 = 123;
let inbox2 = 100;

// let inbox = ''; // Let can be left 'undefined'
inbox1 = 134; // you rewrite data for let but not const

const messageAlert = "You've got mail!";

const allEmails = inbox1 + inbox2 + " emails"; // Concatenate variable together

console.log(allEmails); // 234 emails
alert(messageAlert); // popup alert
