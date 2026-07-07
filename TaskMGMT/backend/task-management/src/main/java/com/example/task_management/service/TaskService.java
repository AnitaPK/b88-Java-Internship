package com.example.task_management.service;
import com.example.task_management.model.Task;
import com.example.task_management.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {
    private  final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository){
        this.taskRepository = taskRepository;
    }

    public String addTask(Task task){
        int result = taskRepository.addTask(task);

        if(result > 0){
            return "Task added successfully!!!!";
        }else {
            return  "Task not added...";
        }
    }
//    getAllTask
    public List<Task> getAllTask(){
        return taskRepository.getAllTasks();
}
//    getTaskByID
public Task getTaskByID(int id){
    return taskRepository.getTaskByID(id);
}

//update task

    public String updateTask(int id, Task task){
        int result = taskRepository.updateTask(id, task);
        if(result > 0){
            return "Task updated successfully!!!!";
        }else {
            return  "Task not added...";
        }
    }
    public String deleteTask(int id){
        int result = taskRepository.deleteTask(id);
        if(result > 0){
            return "Task deleted successfully!!!!";
        }else {
            return  "Task not added...";
        }
    }

}
