import React from 'react';
import { allMessages } from "./graphql";
import { useQuery } from "@apollo/client";

function MessageList() {
    const { data, loading, error } = useQuery(allMessages);

    if (loading) {
        return (<p>Loading...</p>)
    }
    if (error) {
        return (<p>a mistake was made...</p>)
    }
    type Message = {
        body: string,
        id: string,
        user: { username: string }
    }

    const messages = data.messages.map((message: Message) =>
        <li key={message.id}>{message.user.username}, {message.body}</li>)

    return (<div>
        <ul>{messages}</ul>
    </div>)

}
export default MessageList;