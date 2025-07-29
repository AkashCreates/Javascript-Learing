// let result = true || false;
// console.log(typeof result);

// alert(4 > 8 || 100 < 4 || "akash");

// let firstName = "";
// let lastName = "";
// let nickName = "";

// console.log(firstName || lastName || nickName || "Unknown");

// 1 || alert("not printed");
// false || alert("printed");

// if (1 && 0) { // evaluated as true && false
//   alert( "won't work, because the result is falsy" );
// }

// console.log(30 && false && false);

// ============================== Task

// console.log(null || 2 || undefined);

// console.log("console.log(1)" || console.log(5) || 3);
// alert( alert(1) || 2 || alert(3) );

// first truthy value
// console.log(false || 5 > 3 || false || 4 || true);
// first falsey value
// console.log(true && console.log(10) && true && 5 && "lastValue");

// Check the range between

// let age = Number(prompt("Your age", ""));
// // console.log(typeof age);
// if (!(age >=14 && age <= 90)){
//     console.log("Hurrey, age is NOT between 14 and 90");
// }else{
//     console.log("sorry you are between 14 to 90");
// }
// alternative --- if (age < 14 || age > 90)

// alert(0 || 0);
// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );


//Check the login


let visitorIdentity = prompt("Who's there?", "");

if (visitorIdentity === "Admin" || visitorIdentity === "admin") {
  let password = prompt("Password?", "");

  if (password === "TheMaster") {
    alert("Wellcome");
  } else if (password === "" || password === null) {
    alert("Canceled");
  } else {
    alert("Wrong Password");
  }
} else if (visitorIdentity ===  "" || visitorIdentity === null) {
  alert("Canceled");
} else {
  alert("I don't know you");
}




