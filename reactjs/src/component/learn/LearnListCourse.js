import React, { useEffect, useState } from 'react'
import {useParams } from 'react-router-dom';
import { urlLearn } from '../url/urlTest';
import CourseItem from './CourseItem'
import axios from 'axios';
export default function LearnListCourse() {
  

    const { classes, Lsubject } = useParams();
    const [courseList, setCourseList] = useState([]);
    const learn = urlLearn;
    useEffect(() => {
      axios.get(`${learn}?c=${classes}&s=${Lsubject}`).then(resp => {
        setCourseList(resp.data);
          let map = new Map();
          for (let item of resp.data) {
              map.set(item.id, []);
          }
      });
  }, []);
    return (
    <div>
      {courseList.map((item) => 
        <CourseItem
          key={item.id}
          id={item.id}
          name={item.name}
          status={item.status}
          ></CourseItem>)}
    </div>
  )
}
