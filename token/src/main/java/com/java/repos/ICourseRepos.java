package com.java.repos;

import com.java.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICourseRepos extends JpaRepository<Course, Integer> {
}
