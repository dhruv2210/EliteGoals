// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDABc9w4ytLEhiIRV8b53-ioRioE67mkGU",
  authDomain: "otp-project-3d7ac.firebaseapp.com",
  projectId: "otp-project-3d7ac",
  storageBucket: "otp-project-3d7ac.appspot.com",
  messagingSenderId: "694127913280",
  appId: "1:694127913280:web:27bee68136170bb8fc32a5",
  measurementId: "G-H5F2PFVJ9E"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyC2mNPcm0LseJ7WaNnEBPMzXTHGho3PxLg",
//   authDomain: "elitegoals-d7435.firebaseapp.com",
//   projectId: "elitegoals-d7435",
//   storageBucket: "elitegoals-d7435.appspot.com",
//   messagingSenderId: "700119142845",
//   appId: "1:700119142845:web:34785212c966df1b6842d4",
//   measurementId: "G-TT604SS83P"
// };



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);