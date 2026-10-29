import { auth, db } from "./firebase.js";

import {
signInWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
doc,
getDoc
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

document.getElementById("loginBtn")
.addEventListener("click", async () => {

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

try {

const userCredential =
await signInWithEmailAndPassword(
auth,
email,
password
);

const user = userCredential.user;

const docRef =
doc(db, "users", user.uid);

const docSnap =
await getDoc(docRef);

if(docSnap.exists())
{
   const role = docSnap.data().role;

   if(role === "admin")
   {
      window.location.href = "admin.html";
   }

   else if(role === "agency")
   {
      window.location.href =
      "agencydashboard.html";
   }

   else
   {
      window.location.href =
      "userdashboard.html";
   }
}

}

catch(error)
{
   alert(error.message);
}

});