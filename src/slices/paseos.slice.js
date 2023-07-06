import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { paseosFunctions } from "../api/index.js";

const {
  getAllPaseos,
  createPaseo,
  updatePaseo,
  deletePaseo,
  getPaseoByNum,
  getPaseosByUserCode,
  getPaseosByWalkerCode,
} = paseosFunctions;

export const getAllPaseosAsync = createAsyncThunk(
  "paseos/getAllPaseosAsync",
  async () => {
    const response = await getAllPaseos();
    return response;
  }
);
export const createPaseoAsync = createAsyncThunk(
  "paseos/createPaseoAsync",
  async (Paseo) => {
    const response = await createPaseo(Paseo);
    return response;
  }
);

export const getPaseoByNumAsync = createAsyncThunk(
  "paseos/getPaseoByNumAsync",
  async (pasNum) => {
    const response = await getPaseoByNum(pasNum);
    return response;
  }
);

export const getPaseosByUserCodeAsync = createAsyncThunk(
  "paseos/getPaseosByUserCode",
  async (userCod) => {
    const response = await getPaseosByUserCode(userCod);
    return response;
  }
);

export const getPaseosByWalkerCodeAsync = createAsyncThunk(
  "paseos/getPaseosByWalkerCode",
  async (pasCod) => {
    const response = await getPaseosByWalkerCode(pasCod);
    return response;
  }
);

export const deletePaseoAsync = createAsyncThunk(
  "paseos/deletePaseoAsync",
  async (pasNum) => {
    const response = await deletePaseo(pasNum);
    return response;
  }
);

export const updatePaseoAsync = createAsyncThunk(
  "paseos/updatePaseoAsync",
  async (Paseo) => {
    const response = await updatePaseo(Paseo);
    return response;
  }
);

const paseosSlice = createSlice({
  name: "paseos",
  initialState: {
    allPaseos: [],
    paseos: [],
    paseoSelected: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPaseosAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllPaseosAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.allPaseos = action.payload;
      })
      .addCase(createPaseoAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPaseoAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.created = action.payload;
      })
      .addCase(getPaseoByNumAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPaseoByNumAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.paseoSelected = action.payload;
      })
      .addCase(getPaseosByUserCodeAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPaseosByUserCodeAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.paseos = action.payload;
      })
      .addCase(getPaseosByWalkerCodeAsync.pending, (state) => {
        state.loading = false;
      })
      .addCase(getPaseosByWalkerCodeAsync.fulfilled, (state, action) => {
        state.loading = true;
        state.paseos = action.payload;
      })
      .addCase(deletePaseoAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletePaseoAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.deleted = true;
      });
  }, //Falta un update :)
});

export default paseosSlice.reducer;
