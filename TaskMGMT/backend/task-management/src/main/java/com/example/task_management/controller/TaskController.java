package com.example.task_management.controller;

import com.example.task_management.model.Task;
import com.example.task_management.service.TaskService;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/task")
@CrossOrigin("*")
public class TaskController {
    private final TaskService taskService;
    public TaskController(TaskService taskService){
        this.taskService = taskService;
    }

    @PostMapping("/addTask")
    public  String addTask(@RequestBody Task task){
        return taskService.addTask(task);
    }
//    getAllTask
    @GetMapping("/getAllTasks")
    public List<Task> getAllTasks(){
        return taskService.getAllTask();
    }
//    getTaskByID
    @GetMapping("/getTaskByID/{id}")
    public Task getTaskByID(@PathVariable int id){
        return taskService.getTaskByID(id);
    }

    @PutMapping("/updateTask/{id}")
    public String updateTask(@PathVariable int id, @RequestBody Task task){
        System.out.println(id);
        return taskService.updateTask(id, task);
    }

    @DeleteMapping("/deleteTask/{id}")
    public  String deleteTask(@PathVariable int id){
        return  taskService.deleteTask(id);
    }
}


//http://localhost:8080/api/task/addTask
//http://localhost:8080/api/task/getAllTasks