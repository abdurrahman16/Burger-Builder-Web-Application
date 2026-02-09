import * as actionType from "./actionType";
import axios from "axios";

export const auth = (email, password) =>dispatch => {
    const authData = {
        email: email,
        password: password,
        returnSecureToken: true
    };

    const API_KEY = "AIzaSyBCImPSaKq_aVIWNgESYH5Ba23oh9Xu49A";

    axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="+ API_KEY, authData)
    .then(response => {
        console.log(response.data);
        dispatch({type: actionType.AUTH_SUCCESS, token: response.data.idToken, userId: response.data.localId});
    })
    .catch(err => {
        console.log(err);
        dispatch({type: actionType.AUTH_FAILED, error: err.response.data.error});
    });
}
