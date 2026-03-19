import './Modules.css'
import type {ICourse} from "../../models/ICourse.ts";


export const ModulesComponent = ({course}:{course: ICourse}) => {
    return (
        <ul className="modules-list">
            {
                course.modules.map((module: string, index: number) => {
                    return <li className="module-item" key={index}>{module}</li>
                })
            }
        </ul>
    );
};