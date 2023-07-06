import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mascotasFunctions } from "../api/index.js";

const {
  getAllMascotas,
  createMascota,
  getMascotaByCode,
  getMascotasByUserCode,
  deleteMascota,
  updateMascota,
} = mascotasFunctions;

export const getAllMascotasAsync = createAsyncThunk(
  "mascotas/getAllMascotasAsync",
  async () => {
    const response = await getAllMascotas();
    return response;
  }
);
export const createMascotaAsync = createAsyncThunk(
  "mascotas/createMascotaAsync",
  async (mascota) => {
    const response = await createMascota(mascota);
    return response;
  }
);

export const getMascotaByCodeAsync = createAsyncThunk(
  "mascotas/getMascotaByCodeAsync",
  async (masCod) => {
    const response = await getMascotaByCode(masCod);
    return response;
  }
);

export const getMascotasByUserCodeAsync = createAsyncThunk(
  "mascotas/getMascotasByUserCodeAsync",
  async (userCod) => {
    const response = await getMascotasByUserCode(userCod);
    return response;
  }
);

export const deleteMascotaAsync = createAsyncThunk(
  "mascotas/deleteMascotaAsync",
  async (masCod) => {
    const response = await deleteMascota(masCod);
    return response;
  }
);

export const updateMascotaAsync = createAsyncThunk(
  "mascotas/updateMascotaAsync",
  async (mascota) => {
    const response = await updateMascota(mascota);
    return response;
  }
);

export const mascotasSlice = createSlice({
  name: "mascotas",
  initialState: {
    allMascotas: [],
    mascotas: [],
    mascotaSelected: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllMascotasAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllMascotasAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.allMascotas = action.payload;
      })
      .addCase(createMascotaAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(createMascotaAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.created = action.payload;
      })
      .addCase(getMascotaByCodeAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMascotaByCodeAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.mascotaSelected = action.payload;
      })
      .addCase(getMascotasByUserCodeAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMascotasByUserCodeAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.mascotas = action.payload;
      })
      .addCase(deleteMascotaAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteMascotaAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.deleted = true;
      });
  }, //Falta un update :)
});

export default mascotasSlice.reducer;
