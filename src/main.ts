import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//para usar firebase?
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYt7m6yAibhvOeWh-qXN7twxsM0FP-Alc",
  authDomain: "frontend-53b61.firebaseapp.com",
  projectId: "frontend-53b61",
  storageBucket: "frontend-53b61.appspot.com",
  messagingSenderId: "227912602958",
  appId: "1:227912602958:web:99bd314672ebcc205c3a1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  /*

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYt7m6yAibhvOeWh-qXN7twxsM0FP-Alc",
  authDomain: "frontend-53b61.firebaseapp.com",
  projectId: "frontend-53b61",
  storageBucket: "frontend-53b61.appspot.com",
  messagingSenderId: "227912602958",
  appId: "1:227912602958:web:99bd314672ebcc205c3a1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


subir a firebase
firebase login
ng biuld
firebase init
    configure for firebase hosting
    hosting angular
    dist/porfolio-front-end
    configure as single (y)
    automatics with github (n)
    overwrite (n)
firebase deploy

Project Console: https://console.firebase.google.com/project/porfolio-b58f4/overview
Hosting URL: https://porfolio-b58f4.web.app

*/
