import './CourseList.css'
import {coursesArray} from "../../data/arrays.ts";
import {CourseCardComponent} from "../course-card-component/CourseCardComponent.tsx";


export const CoursesListComponent = () => {
    return (
        <div className="courses-container">
            {
                coursesArray.map((course, index) => {
                    return (<CourseCardComponent key={index} course={course}/>)
                })
            }

        </div>
    );
};