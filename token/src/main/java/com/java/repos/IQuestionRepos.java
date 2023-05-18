package com.java.repos;

import com.java.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IQuestionRepos extends JpaRepository<Question, Integer> {
    @Query(value = "SELECT TOP 10 q.id,q.content, q.trueAnswer, q.falseAnswer, q.status,q.courseid FROM question q inner join course c on c.id = q.courseid " +
            "and c.categoryid = :subject and c.classid = :class " +
            "order BY NEWID() ", nativeQuery = true)
    List<Question> listQuestionExam(@Param("subject") String subject,@Param("class") String classes);
}
