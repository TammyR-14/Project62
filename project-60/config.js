import * as firebase from "firebase";

  var firebaseConfig = {
    apiKey: "AIzaSyCEPzsL_O-pjFyTTsAKSmuqOs5tz5fYD2g",
    authDomain: "school-attendance-projec-8bec5.firebaseapp.com",
    databaseURL: "https://school-attendance-projec-8bec5-default-rtdb.firebaseio.com",
    projectId: "school-attendance-projec-8bec5",
    storageBucket: "school-attendance-projec-8bec5.appspot.com",
    messagingSenderId: "365309948727",
    appId: "1:365309948727:web:fae8bc450d8125d62560b2"
  };
  
  firebase.initializeApp(firebaseConfig)

export default firebase.database()
  
 

  