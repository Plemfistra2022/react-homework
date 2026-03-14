import './CourseComponent.css'
import type {ICourseModel} from "../../models/CourseModel.ts";
import type {FC} from "react";

type PropsType = {
    course: ICourseModel;
}
export const CourseComponent: FC<PropsType> = ({course}) => {
    return (
        <li>{course.title} {course.monthDuration}</li>
    )
}