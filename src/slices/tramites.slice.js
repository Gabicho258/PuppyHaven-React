import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { tramitesFunctions } from "../api/index.js";

const {
  getAllTramites,
  createTramite,
  getTramiteByCode,
  getTramitesByUserAdopterCode,
  getTramitesByUserOwnerCode,
} = tramitesFunctions;

export const getAllTramitesAsync = createAsyncThunk(
  "tramites/getAllTramitesAsync",
  async () => {
    const response = await getAllTramites();
    return response;
  }
);
export const createTramiteAsync = createAsyncThunk(
  "tramites/createTramiteAsync",
  async (tramite) => {
    const response = await createTramite(tramite);
    return response;
  }
);

export const getTramiteByCodeAsync = createAsyncThunk(
  "tramites/getTramiteByCodeAsync",
  async (traCod) => {
    const response = await getTramiteByCode(traCod);
    return response;
  }
);

export const getTramitesByUserAdopterCodeAsync = createAsyncThunk(
  "mascotas/getTramitesByUserAdopterCode",
  async (pasCod) => {
    const response = await getTramitesByUserAdopterCode(pasCod);
    return response;
  }
);

export const getTramitesByUserOwnerCodeAsync = createAsyncThunk(
  "mascotas/getTramitesByUserOwnerCode",
  async (usuCod) => {
    const response = await getTramitesByUserOwnerCode(usuCod);
    return response;
  }
);

export const tramitesSlice = createSlice({
  name: "tramites",
  initialState: {
    allTramites: [],
    tramites: [],
    tramiteSelected: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTramitesAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllTramitesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.allTramites = action.payload;
      })
      .addCase(createTramiteAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(createTramiteAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.created = action.payload;
      })
      .addCase(getTramiteByCodeAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTramiteByCodeAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.tramiteSelected = action.payload;
      })
      .addCase(getTramitesByUserOwnerCodeAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTramitesByUserOwnerCodeAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.tramites = action.payload;
      })
      .addCase(getTramitesByUserAdopterCodeAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTramitesByUserAdopterCodeAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.tramites = action.payload;
      });
  },
});

export default tramitesSlice.reducer;
