// Initialize Firebase


///Edit Under This

var firebaseConfig = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id",
};

     
 
////Do Not Edit Below This

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.17.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.17.2/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCdGmk04SoW0BAzOdeuw8WOt_ijjY9ePno",
    authDomain: "hacking-632c6.firebaseapp.com",
    databaseURL: "https://hacking-632c6.firebaseio.com",
    projectId: "hacking-632c6",
    storageBucket: "hacking-632c6.appspot.com",
    messagingSenderId: "280919354954",
    appId: "1:280919354954:web:fe36c3fef588e6b81580b3",
    measurementId: "G-VTB06V658R"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>


firebase.initializeApp(firebaseConfig);
var database = firebase.database();
