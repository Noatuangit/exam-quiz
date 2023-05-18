package com.java.service.impl;

import com.java.model.Course;
import com.java.repos.ICourseRepos;
import com.java.service.ICourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseServiceImpl implements ICourseService {
    @Autowired
    ICourseRepos courseRepos;

    @Override
    public Course save(Course course) {
        return courseRepos.save(course);
    }
}
