import axios from 'axios';

const authService = {
    register : async (userData) => {

        const reply = await axios.post("http://localhost:3000/api/auth/register", userData)
        return reply.data;
    }
}

export default authService;