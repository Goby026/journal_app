import { types } from "../types/types";
import { firebase, googleAuthProvider } from '../firebase/firebase_config';
import Swal from 'sweetalert2';
import { finishLoading, startLoading } from "./ui";

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {

        dispatch(startLoading());

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {

                dispatch(login(user.uid, user.displayName));

                dispatch(finishLoading());
            })
            .catch((error) => {
                console.log(error);
                dispatch(finishLoading());

                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Continue'
                });
            });
    }

}

export const startRegisterEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {

                await user.updateProfile({
                    displayName: name
                });

                dispatch(login(user.uid, user.displayName));
            })
            .catch(e => {

                Swal.fire({
                    title: 'Error!',
                    text: e.message,
                    icon: 'error',
                    confirmButtonText: 'Continue'
                });
            });
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
            });
    }
}

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch(logout());
    }
}

export const logout = () => {
    return {
        type: types.logout
    }
}


// podemos usar dispatch directamente en los return gracias a la libreria THUNK instalada anteriormente