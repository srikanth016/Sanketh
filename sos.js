import { auth, db } from "./firebase.js";

import {
collection,
addDoc,
serverTimestamp
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

document.getElementById("sosBtn")
.addEventListener("click", () => {

navigator.geolocation.getCurrentPosition(

async (position) => {

const user = auth.currentUser;

if(!user)
{
   alert("User not logged in");
   return;
}

const latitude =
position.coords.latitude;

const longitude =
position.coords.longitude;

const emergencyType =
document.getElementById("sosEmergencyType").value;

const sosRequest = await addDoc(
collection(db, "sos_requests"),
{

   userId: user.uid,

   latitude: latitude,

   longitude: longitude,

   status: "waiting",

   emergencyType: emergencyType,

   note: "",

   timestamp: serverTimestamp()

});

window.activeSOSRequestId = sosRequest.id;

alert("SOS Alert Sent Successfully");

document.getElementById("sosPopup")
.style.display = "flex";

},

(error) => {

alert("Location permission denied");

}

);

});