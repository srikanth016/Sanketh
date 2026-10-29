import { getFirestore }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAM2E1MZpUlhuzk937bSFwS5ehWszBlcgI",
  authDomain: "sanketh-a6957.firebaseapp.com",
  projectId: "sanketh-a6957",
  storageBucket: "sanketh-a6957.firebasestorage.app",
  messagingSenderId: "53610876182",
  appId: "1:53610876182:web:9b12bd14d8cae2e56d1437"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);