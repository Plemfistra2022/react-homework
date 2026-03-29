import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";
import {getUsers} from "../../services/api.service.ts";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        const fatchData = async () => {
            const users = await getUsers();
            setUsers(users);
        }
        fatchData();

        return () => {
            console.log("done");
        }
    }, [])

    return (
        <div>
            {
                users.map((value) => (
                    <UserComponent key={value.id} user={value}/>
                ))
            }
        </div>
    );
};



