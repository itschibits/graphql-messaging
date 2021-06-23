import React from 'react';
import { useQuery } from "@apollo/client"
import { allUsers } from "./graphql";

function UserList() {
    const { data, loading, error } = useQuery(allUsers);

    if (loading) {
        return (<p>Loading...</p>)
    }
    if (error) {
        return (<p>a mistake was made...</p>)
    }
    type User = {
        username: string,
        first_name: string,
        last_name: string
    }

    const users = data.users.map((user: User) => <li key={user.username}>{user.username}, {user.first_name}, {user.last_name}</li>)

    return (<div>
        <ul>{users}</ul>
    </div>)



}

export default UserList;