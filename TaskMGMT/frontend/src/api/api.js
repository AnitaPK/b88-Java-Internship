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

export const updateTaskByID = (id, data) =>{
    return axiosInstance.put(`/api/task/updateTask/${id}`, data)
}

export const deleteTask = (id) =>{
    return axiosInstance.delete(`/api/task/deleteTask/${id}`)
}

// create user 
export const createUser =(data) =>{
    console.log(data)
    return axiosInstance.post('/api/user/add',data)
}

export const getAllUser = () =>{
    return axiosInstance.get('/api/user/getAllUsers')
}

export const getUserDetail = (id) =>{
    return axiosInstance.get(`/api/user/getUserById/${id}`)
}

export const updateUser = (id, data) =>{
        return axiosInstance.put(`/api/user/updateUserById/${id}`, data)
    }

export const deleteUser = (id) =>{
    return axiosInstance.delete(`/api/user/deleteUserById/${id}`)
}


export default axiosInstance