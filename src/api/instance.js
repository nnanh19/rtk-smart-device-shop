import axios from "axios"

const instance = axios.create({
    baseURL: 'https://my-json-server.typicode.com/nnanh19/rtk-smart-device-shop/'
})
export default instance
