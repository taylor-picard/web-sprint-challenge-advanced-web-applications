// ✨ implement axiosWithAuth
import axios from "axios";

export default function axiosWithAuth() {
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: `http://localhost:9000/api`,
        headers: {
            authorization: token
        }
    })
}