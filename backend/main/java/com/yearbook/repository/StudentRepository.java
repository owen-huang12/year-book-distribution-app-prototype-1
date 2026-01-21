package com.yearbook.repository;

import com.yearbook.entity.StudentEntry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<StudentEntry, Long> {
}