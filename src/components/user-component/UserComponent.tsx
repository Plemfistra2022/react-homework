import {type FC} from "react";
import type {IUser} from "../../models/IUser.ts";


interface IUserProps {
    user: IUser;
    foo:(item:IUser) => void;
}

export const UserComponent:FC<IUserProps> = ({user, foo}) => {
    return (
        <div>
            <h2>{user.name}</h2>
            <button onClick={() =>{
                foo(user);
            }}>details</button>
        </div>
    )
};
