import api from "./axios";

export const loginUser = async (email: string, password: string): Promise<any> => {
    return await api.post("/auth/login", { email, password });
}

export const registerUser = async (name: string, email: string, password: string): Promise<any> => {
    return await api.post("/auth/register", { name, email, password });
}