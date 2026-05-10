import { useLocation } from "react-router-dom";
import type {IUser} from "../models/IUser.ts";


export const SingleUsersDetailsPage = () => {
    const {state} = useLocation();
    const user = state as IUser;

    return (
        <div>
            {user.name}
            {user.email}
        </div>
    );
};