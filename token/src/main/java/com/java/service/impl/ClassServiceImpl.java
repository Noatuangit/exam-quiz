package com.java.service.impl;

import com.java.model.Classes;
import com.java.repos.IClassRepos;
import com.java.service.ITypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClassServiceImpl implements ITypeService<Classes> {

    @Autowired
    IClassRepos classRepos;

    @Override
    public List<Classes> findAll() {
        return classRepos.findAll();
    }

    @Override
    public Classes save(Classes classes) {
        return classRepos.save(classes);
    }

    @Override
    public Optional<Classes> findById(Integer id) {
        return classRepos.findById(id);
    }
}
