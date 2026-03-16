import "./CharacterComponent.css"
import type {ISimpson} from "../../models/ISimpson.ts";
import type {ReactNode} from "react";

interface CharacterComponentProps {
    simpson: ISimpson,
    children: ReactNode
}

const CharacterComponent = ({simpson, children}: CharacterComponentProps) => {
    return (
        <div>
            <h2>{simpson.name} {simpson.surname}</h2>
            <img src={simpson.photo} alt={simpson.name}/>
            <p>{children}</p>
        </div>
    );
};

export default CharacterComponent;