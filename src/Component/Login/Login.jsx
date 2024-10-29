import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { useState } from "react";
const Login = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const [user, setUser] = useState(null);

  const handelLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handelSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div>
      {user && (
        <div>
          <img src={user.photoURL} alt="No image" />
          <h2>{user.displayName}</h2>
          <h3>Email : {user.email}</h3>
        </div>
      )}
      {user ? (
        <button onClick={handelSignOut}>Log out</button>
      ) : ( 
        <button onClick={handelLogin}>Login</button>
      )}
    </div>
  );
};

export default Login;
