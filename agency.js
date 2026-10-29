
import { db, auth } from "./firebase.js";

import {
  collection,
  onSnapshot,
  updateDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const agencyContainer = document.getElementById("agencyContainer");
const historyContainer = document.getElementById("historyContainer");

let unsubscribe = null;

function renderRequests(querySnapshot) {
  agencyContainer.innerHTML = "";
  historyContainer.innerHTML = "";

  querySnapshot.forEach((documentData) => {
    const data = documentData.data();
    const card = document.createElement("div");

    card.classList.add("request-card");

    card.innerHTML = `
      <h2>🚨 Rescue Mission</h2>
      <p><strong>Emergency:</strong> ${data.emergencyType ?? ""}</p>
      <p><strong>Status:</strong> ${data.status ?? ""}</p>
      <p><strong>Latitude:</strong> ${data.latitude ?? ""}</p>
      <p><strong>Longitude:</strong> ${data.longitude ?? ""}</p>
      <p><strong>Note:</strong> ${data.note ?? ""}</p>
    `;

    if (data.status !== "completed") {
      const actions = [
        ["ON THE WAY", "on_the_way"],
        ["REACHED LOCATION", "reached"],
        ["COMPLETE RESCUE", "completed"]
      ];

      actions.forEach(([label, status]) => {
        const button = document.createElement("button");
        button.className = "action-btn";
        button.textContent = label;

        button.addEventListener("click", async () => {
          try {
            await updateDoc(
              doc(db, "sos_requests", documentData.id),
              { status }
            );
            alert("Status updated");
          } catch (error) {
            alert("Update failed: " + error.message);
          }
        });

        card.appendChild(button);
      });

      agencyContainer.appendChild(card);
    } else {
      historyContainer.appendChild(card);
    }
  });
}

onAuthStateChanged(auth, (user) => {
  if (unsubscribe) {
    unsubscribe();
    unsubscribe = null;
  }

  if (!user) {
    agencyContainer.textContent =
      "Please log in with the agency account first.";
    historyContainer.innerHTML = "";
    return;
  }

  agencyContainer.textContent = "Loading rescue requests...";

  unsubscribe = onSnapshot(
    collection(db, "sos_requests"),
    renderRequests,
    (error) => {
      agencyContainer.textContent =
        "Unable to load rescue requests: " + error.message;
    }
  );
});
