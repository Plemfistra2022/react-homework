import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";


interface IUserProps {
    user: IUser
}

export const UserComponent: FC<IUserProps> = ({user}) => {
    return (
        <div>
            <h2>{user.name}</h2>
        </div>
    );
};


