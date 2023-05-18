package com.java.repos;

import com.java.model.QuestionInExam;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IQuestionInExamRepos extends JpaRepository<QuestionInExam, Integer> {
    List<QuestionInExam> findAllByExam_Id(Integer id);
}
