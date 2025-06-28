import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { usuariosFunctions } from "../api/index.js";

const {
  getAllUsers,
  createUser,
  updateUser,
  getUserByCode,
  deleteUser,
  loginUser,
} = usuariosFunctions;

export const getAllUsersAsync = createAsyncThunk(
  "usuarios/getAllUsersAsync",
  async () => {
    const response = await getAllUsers();
    return response;
  }
);
export const createUserAsync = createAsyncThunk(
  "usuarios/createUserAsync",
  async (user) => {
    const response = await createUser(user);
    return response;
  }
);

export const deleteUserAsync = createAsyncThunk(
  "usuarios/deleteUserAsync",
  async (userCod) => {
    const response = await deleteUser(userCod);
    return response;
  }
);

export const updateUserAsync = createAsyncThunk(
  "usuarios/updateUserAsync",
  async (user) => {
    const response = await updateUser(user);
    return response;
  }
);

export const getUserByCodeAsync = createAsyncThunk(
  "usuarios/getUserByCodeAsync",
  async (userCode) => {
    const response = await getUserByCode(userCode);
    return response;
  }
);

export const loginUserAsync = createAsyncThunk(
  "usuarios/loginUserAsync",
  async (user) => {
    const response = await loginUser(user);
    return response;
  }
);

export const usuariosSlice = createSlice({
  name: "usuarios",
  initialState: {
    allUsers: [],
    user: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsersAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUsersAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.allUsers = action.payload;
      })
      .addCase(createUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.created = true;
      })
      .addCase(getUserByCodeAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserByCodeAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })

      .addCase(deleteUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.deleted = true;
      })

      .addCase(loginUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUserAsync.rejected, (state) => {
        state.loading = false;
        state.loggued = false;
        state.alert = true;
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload[0];
        state.loggued = true;
        sessionStorage.setItem(
          "infoUser",
          JSON.stringify({ id: action.payload.usuario?.id, rol: "usuario" })
        );
      });
  }, //Falta un update y login :)
});

export default usuariosSlice.reducer;
