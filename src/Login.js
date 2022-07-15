import { auth, db } from "./firebase/firebase";
import firebase from "firebase/compat/app";
import { addDocument } from "./firebase/service";

const googleProvide = new firebase.auth.GoogleAuthProvider();

function Login() {
  const signInWithGoogle = async() => {
    const {additionalUserInfo, user} = await auth.signInWithPopup(googleProvide);
    console.log(additionalUserInfo);

    if (additionalUserInfo?.isNewUser){
      addDocument('users', {
        displayName: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId
      })
    }
  }

  return (
    <div className="login-buttons">
        <button className="login-provider-button" onClick={signInWithGoogle}>
          <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon"/>
          <span> Continue with Google</span>
       </button>
       <a href="sms:9285?body=Y ED1">Test open sms</a>
      </div>
  );
}

export default Login;
