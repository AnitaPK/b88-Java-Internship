package com.example.task_management.repository;
import com.example.task_management.model.Task;
import org.springframework.jdbc.core.JdbcTemplate;
import  org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TaskRepository {
    private final JdbcTemplate jdbcTemplate;

    public TaskRepository(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate = jdbcTemplate;
    }

    public int addTask(Task task){
        String sql = "Insert into tasks(title, description,status, startDate, endDate) values (?,?,?,?,?)";
        return  jdbcTemplate.update(
                sql,
                task.getTitle(),
                task.getDescription(),
                task.getStatus(),
                task.getStartDate(),
                task.getEndDate()
        );
    }
//    getAllTasks
    public  List<Task> getAllTasks(){
        String sql = "Select * from tasks";
        return  jdbcTemplate.query(sql, (rs,rowNum) ->{
            Task task = new Task();

            task.setId(rs.getInt("id"));
            task.setTitle(rs.getString("title"));
            task.setDescription(rs.getString("description"));
            task.setStatus((rs.getString("status")));
            task.setStartDate(rs.getString("startDate"));
            task.setEndDate(rs.getString("endDate"));

            return task;
        });
    }
//    getTaskByID
    public Task getTaskByID(int id){
        String sql = "Select * from tasks where id = ?";

        return  jdbcTemplate.queryForObject(sql, (rs,rowNum) ->{
            Task task = new Task();

            task.setId(rs.getInt("id"));
            task.setTitle(rs.getString("title"));
            task.setDescription(rs.getString("description"));
            task.setStatus((rs.getString("status")));
            task.setStartDate(rs.getString("startDate"));
            task.setEndDate(rs.getString("endDate"));
            return task;
        }, id);
    }

//    update task
    public int updateTask(int id, Task task){
        String sql = "update tasks set title= ?, description = ?,  status = ?, startDate = ?, endDate = ? where id = ?";

        return jdbcTemplate.update(
                sql,
                task.getTitle(),
                task.getDescription(),
                task.getStatus(),
                task.getStartDate(),
                task.getEndDate(),
                id
        );
    }
//    delete task
    public  int deleteTask(int id){
        String sql = "delete from tasks where id =?";
        return  jdbcTemplate.update(sql,id);
    }
}
