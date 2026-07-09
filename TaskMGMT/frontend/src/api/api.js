import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:"http://localhost:8080",

})

export const createTask = (data) =>{
    return axiosInstance.post("/api/task/addTask", data)
}