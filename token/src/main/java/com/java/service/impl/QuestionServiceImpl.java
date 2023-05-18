package com.java.service.impl;

import com.java.model.Question;
import com.java.repos.IQuestionRepos;
import com.java.service.IQuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionServiceImpl implements IQuestionService {
    @Autowired
    IQuestionRepos questionRepos;

    @Override
    public List<Question> getQuestionExam(String subject, String classes) {
        return questionRepos.listQuestionExam(subject, classes);
    }

    @Override
    public Question findById(Integer id) {
        return questionRepos.findById(id).orElse(null);
    }

    @Override
    public Question addQuestion(Question question) {
        return questionRepos.save(question);
    }
}
