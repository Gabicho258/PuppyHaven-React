import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { comentariosFunctions } from "../api/index.js";

const { createComentario, getAllComentarios, getComentariosByWalkerCode } =
  comentariosFunctions;

export const getAllComentariosAsync = createAsyncThunk(
  "comentarios/getAllComentariosAsync",
  async () => {
    const response = await getAllComentarios();
    return response;
  }
);
export const createComentarioAsync = createAsyncThunk(
  "comentarios/createComentarioAsync",
  async (comentario) => {
    const response = await createComentario(comentario);
    return response;
  }
);

export const getComentariosByWalkerCodeAsync = createAsyncThunk(
  "comentarios/getComentariosByWalkerCodeAsyn",
  async (walkerCod) => {
    const response = await getComentariosByWalkerCode(walkerCod);
    return response;
  }
);

export const comentariosSlice = createSlice({
  name: "comentarios",
  initialState: {
    allComentarios: [],
    comentarios: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllComentariosAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllComentariosAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.allComentarios = action.payload;
      })
      .addCase(createComentarioAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(createComentarioAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.created = action.payload;
      })

      .addCase(getComentariosByWalkerCodeAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getComentariosByWalkerCodeAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.comentarios = action.payload;
      });
  }, //Falta un update :)
});

export default comentariosSlice.reducer;
