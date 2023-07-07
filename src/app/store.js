import { configureStore } from "@reduxjs/toolkit";
import mascotasReducer from "../slices/mascotas.slice";
import paseosReducer from "../slices/paseos.slice";
import usuariosReducer from "../slices/usuarios.slice";
import calificacionesReducer from "../slices/calificaciones.slice";
import paseadoresReducer from "../slices/paseadores.slice";
import tramitesReducer from "../slices/tramites.slice";
import distritosReducer from "../slices/distritos.slice";

export const store = configureStore({
  reducer: {
    mascotas: mascotasReducer,
    paseos: paseosReducer,
    usuarios: usuariosReducer,
    calificaciones: calificacionesReducer,
    paseadores: paseadoresReducer,
    tramites: tramitesReducer,
    distritos: distritosReducer,
  },
});
