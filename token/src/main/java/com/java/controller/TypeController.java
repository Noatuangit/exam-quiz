package com.java.controller;

import com.java.model.Category;
import com.java.model.Classes;
import com.java.service.ITypeService;
import com.java.service.impl.CategoryServiceImpl;
import com.java.service.impl.ClassServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/type")
@CrossOrigin("http://localhost:3000/")
public class TypeController {

    ITypeService<Category> categoryITypeService;

    ITypeService<Classes> classesITypeService;

    public TypeController(CategoryServiceImpl categoryITypeService, ClassServiceImpl classesITypeService){
        this.classesITypeService = classesITypeService;
        this.categoryITypeService = categoryITypeService;
    }

    @GetMapping("category")
    public ResponseEntity<List<Category>> getCategory(){
        return ResponseEntity.status(HttpStatus.OK).body(categoryITypeService.findAll());
    }

    @GetMapping("class")
    public ResponseEntity<List<Classes>> getClasses(){
        return ResponseEntity.status(HttpStatus.OK).body(classesITypeService.findAll());
    }
}
