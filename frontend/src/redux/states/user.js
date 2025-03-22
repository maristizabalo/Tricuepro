import { createSlice } from "@reduxjs/toolkit";

export const EmptyUserState = {
    id: 0,
    correo: "",
    user: ""
}

export const persistLocalStorageUser = (username, user_id, rol, nombre, auth_tokens) => {
    localStorage.setItem('auth_tokens', JSON.stringify({ ...auth_tokens }));
}

export const clearLocalStorageUser = () => {
    localStorage.removeItem('auth_tokens');
}

const initialStateFromLocalStorage = () => {
    const auth_tokens = JSON.parse(localStorage.getItem('auth_tokens')) || "";

    return {
        user,
        auth_tokens
    };
};

export const userSlice = createSlice({
    name: "user",
    initialState: localStorage.getItem('user') ? initialStateFromLocalStorage() : EmptyUserState,
    reducers: {
        createUser: (state, action) => {
            persistLocalStorageUser(
                action.payload.auth_tokens
            );
            return {
                user: {
                    username: action.payload.username,
                    nombre: action.payload.nombre,
                    user_id: action.payload.user_id,
                    rol: action.payload.rol

                },
                auth_tokens: action.payload.auth_tokens
            }
        },
        updateUser: (state, action) => {
            const result = { ...state, ...action.payload };
            persistLocalStorageUser(action.payload.username, action.payload.auth_tokens);
            return result
        },
        resetUser: () => {
            clearLocalStorageUser()
            return EmptyUserState
        }
    }
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;