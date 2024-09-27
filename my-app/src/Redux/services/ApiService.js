import axios from "axios";
import {
  loginFail,
  loginSuccess,
  logoutSuccess,
  isToken,
} from "../actions/loginAction";
import {
  userFail,
  userLogout,
  userSuccess,
  userUpdateSuccess,
  userUpdateFail,
} from "../actions/userAction";

// URL de base pour l'API
const BASE_URL = "http://localhost:3001/api/v1";

/**
 * Fonction de login
 * @param {String} email - L'email de l'utilisateur
 * @param {String} password - Le mot de passe de l'utilisateur
 * @param {Boolean} rememberMe - Indique si l'utilisateur souhaite être "remembered"
 * @returns {Object}
 */
export const login = (email, password, rememberMe) => (dispatch) => {
  axios
    .post(BASE_URL + "/user/login", { email, password })
    .then((response) => {
      const token = response.data.body.token;
      if (rememberMe) {
        localStorage.setItem("token", JSON.stringify(token)); // Stocker dans le localStorage si Remember me est coché
      } else {
        sessionStorage.setItem("token", JSON.stringify(token)); // Stocker dans la sessionStorage sinon
      }
      dispatch(loginSuccess(response.data)); // Dispatch l'action de succès de login
      console.log(response);
      return response.data;
    })
    .catch((err) => {
      dispatch(loginFail(err.response.data.message)); // Dispatch l'action d'échec de login
    });
};

/**
 * Fonction pour obtenir le profil de l'utilisateur
 * @param {String} value_token - Le token de l'utilisateur
 */
export const userProfile = (value_token) => (dispatch) => {
  const token =
    localStorage.getItem("token") !== null
      ? localStorage
          .getItem("token")
          .slice(1, localStorage.getItem("token").length - 1)
      : value_token;
  axios
    .post(
      BASE_URL + "/user/profile",
      { token },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then((response) => {
      dispatch(userSuccess(response.data)); // Dispatch l'action de succès de récupération du profil
      dispatch(isToken()); // Dispatch l'action indiquant que le token est valide
    })
    .catch((err) => {
      dispatch(userFail(err.response)); // Dispatch l'action d'échec de récupération du profil
    });
};

/**
 * Fonction pour mettre à jour le profil de l'utilisateur
 * @param {String} userName - Le nouveau nom d'utilisateur
 * @param {String} value_token - Le token de l'utilisateur
 */
export const updateProfile = (userName, value_token) => (dispatch) => {
  const token =
    localStorage.getItem("token") !== null
      ? localStorage
          .getItem("token")
          .slice(1, localStorage.getItem("token").length - 1)
      : value_token;
  axios
    .put(
      BASE_URL + "/user/profile",
      { userName: userName },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((res) => {
      dispatch(userUpdateSuccess(res.data)); // Dispatch l'action de succès de mise à jour du profil
      console.log("dattataat reponse", res.data);
    })
    .catch((err) => {
      dispatch(userUpdateFail(err.response)); // Dispatch l'action d'échec de mise à jour du profil
    });
};

/**
 * Fonction de logout
 */
export const logout = () => (dispatch) => {
  sessionStorage.clear(); // Vider la sessionStorage
  localStorage.removeItem("token"); // Supprimer le token du localStorage
  dispatch(userLogout()); // Dispatch l'action de logout de l'utilisateur
  dispatch(logoutSuccess()); // Dispatch l'action de succès de logout
};

// Exportation des services d'authentification
const auth_service = { login, userProfile, logout };
export default auth_service;