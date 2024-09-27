import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./reducers/loginReducer";
import { userReducer } from "./reducers/userReducer";

/**
 * Configures store
 * Cette fonction configure le store Redux avec les reducers et les middlewares nécessaires.
 */
export const store = configureStore({
  reducer: {
    // Ajoute le reducer de login au store
    login: loginReducer,
    // Ajoute le reducer de user au store
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Désactive la vérification de la sérialisation pour éviter les erreurs avec des objets non sérialisables
      serializableCheck: false,
    }),
});