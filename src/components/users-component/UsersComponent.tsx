import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";
import {getUsers} from "../../services/api.service.ts";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [item, setItem] = useState<IUser | null>(null);
    useEffect(() => {
        const fatchData = async () => {
            const users = await getUsers();
            setUsers(users);
        }
        fatchData();

        return () => {
            console.log("done");
        }
    }, []);

    const foo = (item: IUser) => {
        setItem(item);
    }

    return (
        <div>
            {
                item && <div>{JSON.stringify(item)}</div>
            }
            {
                users.map((value) => (
                    <UserComponent foo={foo} key={value.id} user={value}/>
                ))
            }
        </div>
    );
};



