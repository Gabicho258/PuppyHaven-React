import { configureStore } from "@reduxjs/toolkit";
import mascotasReducer from "../slices/mascotas.slice";
import paseosReducer from "../slices/paseos.slice";

export const store = configureStore({
  reducer: {
    mascotas: mascotasReducer,
    paseos: paseosReducer,
  },
});
