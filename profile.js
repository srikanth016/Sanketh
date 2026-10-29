import { auth, db } from "./firebase.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
doc,
updateDoc,
getDoc
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

document.getElementById("saveProfileBtn")
.addEventListener("click", async () => {

const user = auth.currentUser;

if(!user)
{
   alert("User not logged in");
   return;
}

const name =
document.getElementById("name").value;

const age =
document.getElementById("age").value;

const gender =
document.getElementById("gender").value;

const bloodGroup =
document.getElementById("bloodGroup").value;

const mobile =
document.getElementById("mobile").value;

const emergencyContact =
document.getElementById("emergencyContact").value;

const address =
document.getElementById("address").value;

const medical =
document.getElementById("medical").value;

await updateDoc(doc(db, "users", user.uid), {

   name:name,
   age:age,
   gender:gender,
   bloodGroup:bloodGroup,
   mobile:mobile,
   emergencyContact:emergencyContact,
   address:address,
   medical:medical,

   profileCompleted:true

});

alert("Profile Saved");

document.getElementById("profileBox")
.style.display = "none";

});

document.getElementById("profileNav")
.addEventListener("click", (event) => {
   event.preventDefault();
   const profileBox = document.getElementById("profileBox");
   profileBox.style.display = "block";
   profileBox.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.getElementById("logoutNav")
.addEventListener("click", async (event) => {
   event.preventDefault();
   try {
      await signOut(auth);
      window.location.href = "display2.html";
   } catch (error) {
      alert(error.message);
   }
});

auth.onAuthStateChanged(async (user) => {

if(user)
{
   const docRef =
   doc(db, "users", user.uid);

   const docSnap =
   await getDoc(docRef);

   if(docSnap.exists())
   {
      if(docSnap.data().profileCompleted)
      {
         document.getElementById("profileBox")
         .style.display = "none";
      }
   }
}

});