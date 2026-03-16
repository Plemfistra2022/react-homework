import "./FamilyComponent.css"
import {simpsons} from "../../data/arrays.ts";
import CharacterComponent from "../character-component/CharacterComponent.tsx";

export const FamilyComponent = () => {
    return (
        <div>
            {
                simpsons.map((simpson, index) => {
                    return (
                        <CharacterComponent key={index} simpson={simpson}>{simpson.info}</CharacterComponent>
                    )

                })
            }
        </div>
    );
};

export default FamilyComponent;