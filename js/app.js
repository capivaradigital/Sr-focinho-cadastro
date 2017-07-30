
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBrYYhw2QGaP0M1hXpmoT4gR7dQqw83oSY",
    authDomain: "pet-project-ff93a.firebaseapp.com",
    databaseURL: "https://pet-project-ff93a.firebaseio.com",
    projectId: "pet-project-ff93a",
    storageBucket: "",
    messagingSenderId: "872442525443"
  };
  firebase.initializeApp(config);

var db = firebase.database();
var ref = db.ref("server/database");