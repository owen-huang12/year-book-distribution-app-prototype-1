package com.yearbook.repository;

import com.yearbook.entity.StudentEntry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StudentRepository extends JpaRepository<StudentEntry, Long> {
    Optional<StudentEntry> findByStudentId(String studentId);
}