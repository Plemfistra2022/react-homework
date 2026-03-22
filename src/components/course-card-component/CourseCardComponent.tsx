import './CourseCard.css'
import type {FC} from "react";
import type {ICourse} from "../../models/ICourse.ts";
import {ModulesComponent} from "../modules-component/ModulesComponent.tsx";

export const CourseCardComponent: FC<{course: ICourse}> = ({course}) => {
    return (
        <div className="course-card">
            <h2 className="course-title">{course.title}</h2>
            <p className="course-info">{course.monthDuration} month <span>|</span> {course.hourDuration} hour</p>
            <ModulesComponent course={course} />
        </div>
    );
};
