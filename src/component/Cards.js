import React from 'react';
import Card from './Card';
import { useState } from 'react';

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
    const [likedCourses, setLickedCourses] = useState([]);


    //it return you a list of all courses from api response
    function getCourses() {
        if (category === "All") {
            let allCourses = [];
            Object.values(courses).forEach(courseCategory => {
                courseCategory.forEach(courseData => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else{
            //shows only specfic category of data
            return courses[category];
        }
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((course) => {
                    return <Card key={course.id} course={course} 
                    likedCourses={likedCourses} setLickedCourses={setLickedCourses} />
                })

            }
        </div>
    )
}

export default Cards;
