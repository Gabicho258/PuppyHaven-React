import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { paseadoresFunctions } from "../api/index.js";

const {
  getAllWalkers,
  createWalker,
  updateWalker,
  deleteWalker,
  getWalkerByCode,
  loginWalker,
} = paseadoresFunctions;

export const getAllWalkersAsync = createAsyncThunk(
  "paseadores/getAllWalkersAsync",
  async () => {
    const response = await getAllWalkers();
    return response;
  }
);
export const createWalkerAsync = createAsyncThunk(
  "paseadores/createWalkerAsync",
  async (walker) => {
    const response = await createWalker(walker);
    return response;
  }
);

export const deleteWalkerAsync = createAsyncThunk(
  "paseadores/deleteWalkerAsync",
  async (pasCod) => {
    const response = await deleteWalker(pasCod);
    return response;
  }
);

export const updateWalkerAsync = createAsyncThunk(
  "paseadores/updateWalkerAsync",
  async (walker) => {
    const response = await updateWalker(walker);
    return response;
  }
);

export const getWalkerByCodeAsync = createAsyncThunk(
  "paseadores/getWalkerByCodeAsync",
  async (pasCod) => {
    const response = await getWalkerByCode(pasCod);
    return response;
  }
);

export const loginWalkerAsync = createAsyncThunk(
  "paseadores/loginWalkerAsync",
  async (walker) => {
    const response = await loginWalker(walker);
    return response;
  }
);

export const paseadoresSlice = createSlice({
  name: "paseadores",
  initialState: {
    allWalkers: [],
    walker: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllWalkersAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllWalkersAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.allWalkers = action.payload;
      })
      .addCase(createWalkerAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(createWalkerAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.created = true;
      })
      .addCase(getWalkerByCodeAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWalkerByCodeAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.walker = action.payload;
      })
      .addCase(deleteWalkerAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteWalkerAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.deleted = true;
      })
      .addCase(loginWalkerAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginWalkerAsync.rejected, (state) => {
        state.loading = false;
        state.loggued = false;
        state.alert = true;
      })
      .addCase(loginWalkerAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.walker = action.payload[0];
        state.loggued = true;
        sessionStorage.setItem(
          "infoUser",
          JSON.stringify({ id: action.payload.paseador?.id, rol: "paseador" })
        );
      });
  }, //Falta un update y login :)
});

export default paseadoresSlice.reducer;
