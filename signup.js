import { auth } from "./firebase.js";
import { db } from "./firebase.js";

import {
doc,
setDoc
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
createUserWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

document.getElementById("signupBtn")
.addEventListener("click", () => {

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

const confirmPassword =
document.getElementById("confirmPassword").value;

const role =
document.getElementById("role").value;

if(password !== confirmPassword)
{
   alert("Passwords do not match");
   return;
}

createUserWithEmailAndPassword(auth, email, password)

.then(async (userCredential) => {

const user = userCredential.user;

await setDoc(doc(db, "users", user.uid), {

   email: email,

   role: role

});

alert("Registration Successful");

console.log(user);

})

.catch((error) => {

   alert(error.message);

});
console.log("Signup JS Loaded");

document.getElementById("signupBtn")
.addEventListener("click", () => {

   alert("Button Working");

});

});