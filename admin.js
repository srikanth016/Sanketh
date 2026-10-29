import { db }
from "./firebase.js";

import {

collection,
getDocs,
updateDoc,
doc

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const sosContainer =
document.getElementById("sosContainer");

async function loadSOSRequests()
{

const querySnapshot =
await getDocs(collection(db, "sos_requests"));

querySnapshot.forEach((documentData) => {

const data = documentData.data();

const card =
document.createElement("div");

card.classList.add("sos-card");

card.innerHTML = `

<h2>🚨 Emergency Alert</h2>

<p><strong>User ID:</strong>
${data.userId}</p>

<p><strong>Emergency:</strong>
${data.emergencyType}</p>

<p><strong>Status:</strong>
${data.status}</p>

<p><strong>Latitude:</strong>
${data.latitude}</p>

<p><strong>Longitude:</strong>
${data.longitude}</p>

<p><strong>Note:</strong>
${data.note}</p>

<button
class="accept-btn"
data-id="${documentData.id}">

ACCEPT RESCUE

</button>

`;

sosContainer.appendChild(card);

});

addAcceptEvents();

}

async function addAcceptEvents()
{

const buttons =
document.querySelectorAll(".accept-btn");

buttons.forEach((button) => {

button.addEventListener("click",
async () => {

const documentId =
button.getAttribute("data-id");

await updateDoc(
doc(db, "sos_requests", documentId),
{

status:"assigned",

assignedAgency:"NDRF Team",

assignedAgencyPhone:"+91 9876543210"

});

alert("Rescue Assigned");

location.reload();

});

});

}

loadSOSRequests();