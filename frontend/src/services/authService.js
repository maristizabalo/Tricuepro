import {api} from "../utils/api";
import { handleErrorResponse } from "../utils/errorHandlingService";

export const login = async (values) => {
    try {
        const response = await api.post('auth/token/', values);
        return response.data;
    } catch (error) {
        handleErrorResponse(error)
    }
};

export const refreshToken = async (values) => {
    try {
        const response = await api.post('auth/token/refresh/', values);
        return response.data;
    } catch (error) {
        handleErrorResponse(error)
    }
};

export const changePasswordService = async (id, values) => {
    try {
        const response = await api.patch(`auth/user/password/${id}/`, values);
        return response.data;
    } catch (error) {
        handleErrorResponse(error)
    }
};

export const editUserService = async (id, values) => {
    try {
        const response = await api.patch(`auth/user/${id}/`, values);
        return response.data;
    } catch (error) {
        handleErrorResponse(error)
    }
};

export const activateUserService = async (id) => {
    try {
        const payload = {
            is_active: true
        }
        const response = await api.patch(`auth/user/${id}/`, payload);
        return response.data;
    } catch (error) {
        handleErrorResponse(error)
    }
};

export const deactivateUserService = async (id) => {
    try {
        const payload = {
            is_active: false
        }
        const response = await api.patch(`auth/user/${id}/`, payload);
        return response.data;
    } catch (error) {
        handleErrorResponse(error)
    }
};

export const userListService = async () => {
    try {
        const response = await api.get('auth/user/');
        return response.data;
    } catch (error) {
        handleErrorResponse(error)
    }
};

export const rolListService = async () => {
    try {
        const response = await api.get('auth/rol/');
        return response.data;
    } catch (error) {
        handleErrorResponse(error)
    }
};

export const logout = async (refreshToken) => {
    try {
        const payload = {
            refresh: refreshToken
        }
        const response = await api.post('auth/logout/', payload);
        return response.data.detail
    } catch (error) {
        handleErrorResponse(error)
    }
};
