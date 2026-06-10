import axios from "axios";

const BASE_URL = "http://localhost:3000/api/auth";

export async function login(data) {
    try {
        const result = await axios.post(`${BASE_URL}/login`, data);
        return result;
    } catch (err) {
        console.error(err.message);
    }
}

export async function register(data) {
    try {
        const result = await axios.post(`${BASE_URL}/register`, data);
        return result;
    } catch (err) {
        console.error(err.message);
    }
}
