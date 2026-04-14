import axios from 'axios';
import { getDefaultStore } from 'jotai'
import { saveAtom } from '../atoms/token.atom'


const userService = {

    getById: async () => {

        const token = getDefaultStore().get(saveAtom)

        //Extract the id from the token
        const payload = JSON.parse(atob(token.split('.')[1]))
        const userId = payload.id

        const response = await axios.get(`http://localhost:3000/api/users/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
     
    },}


    export default userService