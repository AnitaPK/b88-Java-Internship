import axios from "axios";

 const axiosInstance = axios.create({
    baseURL:"http://localhost:8080",

})

export const createTask = (data) =>{
    return axiosInstance.post("/api/task/addTask", data)
}

export const getAllTasks = () =>{
    return axiosInstance.get("/api/task/getAllTasks")
}

export const getTakDetails = (id) =>{
    return axiosInstance.get(`/api/task/getTaskByID/${id}`)
}
export default axiosInstance