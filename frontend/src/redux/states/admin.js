import { createSlice } from "@reduxjs/toolkit";

// Define el estado inicial del admin
export const EmptyAdminState = {
  users: [],
  roles: [],
  permissions: [],
  entities: []
};

// Crea el slice
export const adminSlice = createSlice({
  name: "admin",
  initialState: EmptyAdminState,
  reducers: {
    createUsers: (state, action) => {
      state.users = action.payload; // Actualiza la lista de usuarios
    },
    createRoles: (state, action) => {
      state.roles = action.payload; // Actualiza la lista de roles
    },
    createPermissions: (state, action) => {
      state.permissions = action.payload; // Actualiza la lista de permisos
    },
    createEntities: (state, action) => {
      state.entities = action.payload; // Actualiza la lista de entidades
    },
    resetAdmin: () => {
      return EmptyAdminState
  }
  }
});

// Exporta las acciones
export const { createUsers, createRoles, createPermissions, createEntities, resetAdmin } = adminSlice.actions;

// Exporta el reductor
export default adminSlice.reducer;