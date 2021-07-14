// import { bindActionCreators } from "redux";
import { facebookAuthProvider, firebase } from "../firebase/firebase";
import { googleAuthProvider } from "../firebase/firebase";
import { types } from "../types/types";
import { startLoading, finishLoading } from "./ui";
import Swal from "sweetalert2";



export const login = (uid, displayName, photoURL) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
    photoURL,
  },
});

export const logout = () =>( {
  
    type: types.loggout
})
export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();

    dispatch(logout());
    // dispatch(noteLogout());
  };
};
export const startRegisterWithEmailPasswordName = (name, email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });

        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) => {
        console.log(e);
        Swal.fire("Error", e.message, "error");
      });
  };
};
export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        dispatch(finishLoading());
        
      })
      .catch((e) => {
        console.log(e);
        dispatch(finishLoading());
        Swal.fire("Error", e.message, "error");
      });
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName, user.photoURL));
        
      })
      .catch( (e) => console.log(e));
  };
};

export const startFacebookLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(facebookAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) => console.log(e));
  }
}