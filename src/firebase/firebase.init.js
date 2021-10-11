import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/*
Step-1: Initial Setup
1.Firebase create project
2.create web app
3.get configaration
4.initialize firebase
5.Enable auth method

--------
Step-2: Set up Component
1. Create Login Component
2. Create Register Component
3. Create Route for Login and Register

------------
Step:3  set Auth System
1. set up sign in method
2. setup sign out method
3. user state
4. special obseerver [change sign in to sign out]
5. return necessary methods and states from useFirebase

-------------
Step-4: create Auth Context {useAuth}
1. create a auth context
2. create context  Provider
3. set context provider context value
4. use auth Provider
5. create useAuth Hook

------------
Step:5  create Private Route
1. create private Route
2.  reate private Route


*/