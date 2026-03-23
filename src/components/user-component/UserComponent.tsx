import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";


type UserPropType = {
    item: IUser;
}

const UserComponent: FC<UserPropType> = ({item}) => {
    return (
        <div key={item.id}>{item.name}</div>
    );
};

export default UserComponent;