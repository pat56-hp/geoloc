import axios from "axios"
import { toast } from "react-toastify"

const axiosClient = axios.create({
    baseURL: 'https://api.ipbase.com/v2/info?apikey=ipb_live_gPv47X0geZyLkRiRsKUyxRxs781rqrCt0oOt0o3H'
})

axiosClient.interceptors.response.use((response) => {
    return response
}, (error) => {
    const {response} = error
    
    console.log(response.status)
    if (response.status === 401) {
        localStorage.removeItem('ACCESS_TOKEN')
    }
    if (response.status === 404) {
        toast.error('Oups, impossible d\'accéder au server')
    }

    throw error
})

export default axiosClient