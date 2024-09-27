import { createSlice } from "@reduxjs/toolkit";

// Initial login state
// Cet objet représente l'état initial du login, avec les valeurs par défaut.
const loginState = {
  token: localStorage.getItem("token"), // Récupère le token depuis le localStorage
  isAuth: false, // Indique si l'utilisateur est authentifié
  error: null, // Stocke les erreurs éventuelles
  logoClick: false, // Indique si le logo a été cliqué
};

// Login slice
// Cette fonction crée un slice de Redux pour gérer l'état du login.
const loginSlice = createSlice({
  name: "login", // Nom du slice
  initialState: loginState, // État initial du slice
  reducers: {
    // Action pour gérer le succès du login
    loginSuccess: (state, action) => {
      state.token = action.payload.body.token; // Met à jour le token avec celui reçu dans l'action
      state.isAuth = true; // Met à jour l'état d'authentification
      state.error = null; // Réinitialise les erreurs
    },
    // Action pour gérer l'échec du login
    loginFail: (state, action) => {
      state.token = null; // Réinitialise le token
      state.isAuth = false; // Met à jour l'état d'authentification
      state.error = action.payload; // Stocke l'erreur reçue dans l'action
    },
    // Action pour gérer le succès du logout
    logoutSuccess: (state) => {
      state.token = null; // Réinitialise le token
      state.isAuth = false; // Met à jour l'état d'authentification
      state.error = null; // Réinitialise les erreurs
    },
    // Action pour vérifier si un token existe
    isToken: (state) => {
      state.isAuth = true; // Met à jour l'état d'authentification
    },
    // Action pour gérer le clic sur le logo
    logoClick: (state) => {
      state.logoClick = true; // Met à jour l'état du clic sur le logo
    },
  },
});

// Export des actions et du reducer
export const { loginSuccess, loginFail, logoutSuccess, isToken, logoClick } =
  loginSlice.actions; // Export des actions pour les utiliser dans les composants
export const loginReducer = loginSlice.reducer; // Export du reducer pour l'ajouter au store Redux