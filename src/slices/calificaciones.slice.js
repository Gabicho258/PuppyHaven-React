import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CalificacionesFunctions } from "../api/index.js";

const {
  getAllCalificaciones,
  createCalificacion,
  getCalificacionByCode,
  updateCalificacion,
} = CalificacionesFunctions;

export const getAllCalificacionesAsync = createAsyncThunk(
  "calificaciones/getAllCalificacionesAsync",
  async () => {
    const response = await getAllCalificaciones();
    return response;
  }
);
export const createCalificacionAsync = createAsyncThunk(
  "calificaciones/createCalificacionAsync",
  async (calificacion) => {
    const response = await createCalificacion(calificacion);
    return response;
  }
);

export const getCalificacionByCodeAsync = createAsyncThunk(
  "calificaciones/getCalificacionByCodeAsync",
  async (calCod) => {
    const response = await getCalificacionByCode(calCod);
    return response;
  }
);

export const updateCalificacionAsync = createAsyncThunk(
  "calificaciones/updateCalificacionAsync",
  async (calificacion) => {
    const response = await updateCalificacion(calificacion);
    return response;
  }
);

export const calificacionesSlice = createSlice({
  name: "calificaciones",
  initialState: {
    allCalificaciones: [],
    calificaciones: [],
    calificacionSelected: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCalificacionesAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCalificacionesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.allCalificaciones = action.payload;
      })
      .addCase(createCalificacionAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCalificacionAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.created = action.payload;
      })
      .addCase(getCalificacionByCodeAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCalificacionByCodeAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.calificacionSelected = action.payload;
      });
  }, //Falta un update :)
});

export default calificacionesSlice.reducer;
