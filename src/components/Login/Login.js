import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import * as firebase from "firebase/app";
import firebaseConfig from "./firebase.config";
import "firebase/auth";
import logo from '../../images/logos/logo.png';
import Google from '../../images/logos/google.png';
import './Login.css';
import "firebase/auth";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
  
  
    //google auth code is
    const provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIN= () => {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
          const { displayName, photoURL, email } = res.user;
          const signedInUser = {
            isSignedIn: true,
            name: displayName,
            email: email,
            photo: photoURL,
          };
          setLoggedInUser(signedInUser);
          storAuthtoken();
          history.replace(from);
        })
        .catch((err) => {
          console.log(err);
          console.log(err.message);
        });
  
  
    }
    const storAuthtoken = () => {
      firebase
        .auth()
        .currentUser.getIdToken(/* forceRefresh */ true)
        .then(function (idToken) {
          sessionStorage.setItem("token", idToken);
          history.replace(from);
          
        })
        .catch(function (error) {
          // Handle error
        });
    }
    return (
        <>
        <div className="img mt-5">
            <img className="img-logo mx-auto img-fluid" src={logo} alt="logo"/>
        </div>
        <div className="login-area">
          <h2 >Login With</h2>
          <Button
            style={{ borderRadius: "50px" }}
            onClick={handleGoogleSignIN}
            size="md"
            variant="white"
            block
          >
            <img height="40px" src={Google} alt="" />
            <span>Continue with Google</span>
          </Button>
          <p className="login-para">
            Don't have an account? <a href="#">Create an account</a>{" "}
          </p>
        </div>
        </>
    );
};

export default Login;