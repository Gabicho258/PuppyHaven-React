import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { distritosFunctions } from "../api/index.js";

const { getAllDistritos, createDistrito, updateDistrito, getDistritoByCode } =
  distritosFunctions;

export const getAllDistritosAsync = createAsyncThunk(
  "distritos/getAllDistritosAsync",
  async () => {
    const response = await getAllDistritos();
    return response;
  }
);
export const createDistritoAsync = createAsyncThunk(
  "distritos/createDistritoAsync",
  async (name) => {
    const response = await createDistrito(name);
    return response;
  }
);

export const updateDistritoAsync = createAsyncThunk(
  "distritos/updateDistritoAsync",
  async (distrito) => {
    const response = await updateDistrito(distrito);
    return response;
  }
);

export const getDistritoByCodeAsync = createAsyncThunk(
  "distritos/getDistritoByCodeAsync",
  async (disCod) => {
    const response = await getDistritoByCode(disCod);
    return response;
  }
);

export const ditritosSlice = createSlice({
  name: "distritos",
  initialState: {
    allDistritos: [],
    distrito: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllDistritosAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllDistritosAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.allDistritos = action.payload;
      })
      .addCase(createDistritoAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(createDistritoAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.created = action.payload;
      })
      .addCase(getDistritoByCodeAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDistritoByCodeAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.distrito = action.payload;
      }); //Falta un update :)
  },
});

export default ditritosSlice.reducer;
