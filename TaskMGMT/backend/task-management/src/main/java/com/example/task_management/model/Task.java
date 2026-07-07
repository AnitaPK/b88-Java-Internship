package com.example.task_management.model;
import  lombok.Data;


@Data
public class Task {
    private int id;
    private String title;
    private String description;
    private String status;
    private  String startDate;
    private String endDate;
}
