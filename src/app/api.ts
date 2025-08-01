import axios from 'axios';

// Create axios instance with default config
const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
});

// Add a request interceptor
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Add response interceptor
api.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            // Clear token and user data
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            // Redirect to login
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export interface User {
    id: string;
    email: string;
    username: string;
    fullname: string;
    avatar_url: string | null;
    bio: string;
    date_of_birth: string;
    status: string;
    created_at: string;
}
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const register = async (
    email: string,
    username: string,
    password: string
) => {
    const response = await api.post('/auth/register', {
        email,
        username,
        password,
    });
    return response.data;
};

export const login = async (
    identifier: string,
    password: string
) => {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, {
        identifier,
        password,
    });
    if (response.data?.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
};
export async function forgotPassword(email: string) {
    const response = await axios.post(`${API_BASE_URL}/auth/forgot-password`, {
        email,
    });
    return response.data;
}
export async function getUser(): Promise<User | null> {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
        return JSON.parse(storedUser) as User;
    }
    return null;
}
export async function resetPassword(newPassword: string, token: string) {
    const response = await axios.post(
        `${API_BASE_URL}/auth/reset-password`,
        { new_password: newPassword },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    return response.data;
}
