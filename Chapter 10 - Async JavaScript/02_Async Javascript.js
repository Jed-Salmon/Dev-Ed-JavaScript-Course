console.log("Start");

function loginUser(email, password) {
  setTimeout(() => {
    console.log("Now we have the data!");
    return { userEmail: email };
  }, 1500);
}

const user = loginUser("devjed@goomail.com", 123456);

console.log(user); // undefined because loginUser hasn't been invoked yet (only after 1.5s)

console.log("Finish");

/*
Start
undefined -- 
End
[...]
now we have the data
*/
