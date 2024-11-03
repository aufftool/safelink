//

// Delay the Firebase initialization and license check
setTimeout(function() {
const firebaseConfig = {
apiKey: "AIza"+"SyDXyp"+"OLIR-tdU6aPw0"+"kJeRe96nTjx"+"mJrXo",
authDomain: "shor"+"tlink-auffto"+"ol.fireb"+"as"+"eapp.com",
databaseURL: "https://s"+"hortl"+"ink-auf"+"ftool-defaul"+"t-rtd"+"b.fireb"+"ase"+"io.com",
projectId: "short"+"link-"+"auff"+"tool",
storageBucket: "short"+"link-auff"+"tool.apps"+"pot.com",
messagingSenderId: "12379530992",
appId: "1:12379530"+"992:web:162"+"709042e7e"+"e75cfb8435",
measurementId: "G-KS2"+"K83"+"PRFW"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

var licensedKey = licenseKey || "";
if (licensedKey == null || licensedKey == "") {
// No license
location.href = "ht"+"tp"+"s://wh"+"ite-a"+"ctio"+"n.bl"+"og"+"spot."+"com/?issue=HA"+"VE Not licensed";
} else {
const licensesRef = db.ref('licenses');
licensesRef.child(licensedKey).once('value', (snapshot) => {
const data = snapshot.val();
if (data) {
if (data.blogID_1 == blogID) {
} else if (data.blogID_2 == blogID) {
} else if (data.blogID_3 == blogID) {
//
} else {
if (licenseKey == 'FREE') {
showCopyrightModal()
} else {
showCopyrightModal()
}
}
} else {
if (licenseKey == 'FREE') {
showCopyrightModal()
} else {
showCopyrightModal()}
}
});
}
}, 2000); // Delay in milliseconds (e.g., 3000ms = 3 seconds)
