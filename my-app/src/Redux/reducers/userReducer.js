import { createSlice } from "@reduxjs/toolkit";

// Initial user state
// Cet objet représente l'état initial de l'utilisateur, avec des valeurs par défaut.
const userState = {
  firstName: null, // Prénom de l'utilisateur
  title: null, // Titre de l'utilisateur
  content: null, // Contenu associé à l'utilisateur
  author: null, // Auteur associé à l'utilisateur
  id: null, // Identifiant de l'utilisateur
  error: null, // Stocke les erreurs éventuelles
};

// User slice
// Cette fonction crée un slice de Redux pour gérer l'état de l'utilisateur.
const userSlice = createSlice({
  name: "user", // Nom du slice
  initialState: userState, // État initial du slice
  reducers: {
    // Action pour gérer le succès de la récupération des informations de l'utilisateur
    userSuccess: (state, action) => {
      Object.assign(state, action.payload.body); // Mettre à jour les propriétés de l'utilisateur avec les données reçues
      state.error = null; // Réinitialiser les erreurs
    },
    // Action pour gérer l'échec de la récupération des informations de l'utilisateur
    userFail: (state, action) => {
      state.error = action.payload.message; // Stocker l'erreur reçue dans l'action
    },
    // Action pour gérer la déconnexion de l'utilisateur
    userLogout: (state) => {
      Object.keys(userState).forEach((key) => {
        state[key] = userState[key]; // Réinitialiser toutes les propriétés de l'utilisateur à leur état initial
      });
    },
    // Action pour gérer le succès de la mise à jour des informations de l'utilisateur
    userUpdateSuccess: (state, action) => {
      return {
        ...state, // Copiez d'abord toutes les propriétés de l'état actuel
        ...action.payload.body, // Mettez à jour les propriétés de l'utilisateur avec les données reçues
        error: null, // Réinitialisez l'erreur à null
      };
    },
    // Action pour gérer l'échec de la mise à jour des informations de l'utilisateur
    userUpdateFail: (state, action) => {
      state.error = action.payload.message; // Stocker l'erreur reçue dans l'action
    },
  },
});

// Export des actions et du reducer
export const {
  userSuccess,
  userFail,
  userLogout,
  userUpdateSuccess,
  userUpdateFail,
} = userSlice.actions; // Export des actions pour les utiliser dans les composants
export const userReducer = userSlice.reducer; // Export du reducer pour l'ajouter au store Redux