import { db }
from "./firebase.js";

import {
updateDoc,
doc
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

document.getElementById("sendDetailsBtn")
.addEventListener("click", async () => {

const sendDetailsBtn =
document.getElementById("sendDetailsBtn");

const requestId = window.activeSOSRequestId;

if(!requestId)
{
   alert("Send an SOS before submitting emergency details");
   return;
}

const emergencyType =
document.getElementById("detailsEmergencyType").value;

const note =
document.getElementById("note").value;

sendDetailsBtn.disabled = true;

try {
   await updateDoc(
      doc(db, "sos_requests", requestId),
{

   emergencyType: emergencyType,

   note: note

});

alert("Emergency Details Sent");

document.getElementById("sosPopup")
.style.display = "none";

window.activeSOSRequestId = null;
} catch(error) {
   alert(`Could not send emergency details: ${error.message}`);
} finally {
   sendDetailsBtn.disabled = false;
}

});