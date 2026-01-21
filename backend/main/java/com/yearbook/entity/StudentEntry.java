package com.yearbook.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "students")
public class StudentEntry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "student_id", unique = true, nullable = false)
    private String studentId;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "status", nullable = false)
    private String status;

    public StudentEntry() {
    }

    public StudentEntry(String studentId, String name, String status) {
        this.studentId = studentId;
        this.name = name;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
