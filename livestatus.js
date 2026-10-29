import { auth, db }
from "./firebase.js";

import {

collection,
query,
where,
getDocs

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

async function loadStatus()
{

const user = auth.currentUser;

if(!user) return;

const q =
query(
collection(db, "sos_requests"),
where("userId", "==", user.uid)
);

const querySnapshot =
await getDocs(q);

querySnapshot.forEach((documentData) => {

const data = documentData.data();

document.getElementById("liveStatus")
.innerHTML = `

🚑 Status :
${data.status}

<br><br>

Agency :
${data.assignedAgency || "Waiting"}

<br><br>

Phone :
${data.assignedAgencyPhone || "Waiting"}

`;

});

}

setInterval(loadStatus, 3000);