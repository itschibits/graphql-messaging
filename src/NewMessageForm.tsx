import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

/** NewMessageForm
 * 
 * Props:
 * - username
 * 
 * State:
 * - formData
 */
type NewMessageFormProps = {
    username: string
}
function NewMessageForm({ username }: NewMessageFormProps) {
    const initialState = {user: username, messageBody:""};
    const [formData, setFormData] = useState(initialState);

    function handleChange(evt: { target: { name: any; value: any; }; }){
        const { name, value } = evt.target;
        setFormData(curr => ({...curr, [name]: value}));
    }

    function handleSubmit(evt:React.FormEvent){
        evt.preventDefault();
        setFormData(initialState);
    }

    return (
    <Form onSubmit={handleSubmit} className="NewMessageForm">
        <Form.Group controlId="newMessageForm.username">
            <Form.Label>Username</Form.Label>
            <Form.Control onChange={handleChange} name="user" value={formData.user} type="text" placeholder="username" />
        </Form.Group>
        <Form.Group controlId="newMessageForm.messageBody">
            <Form.Label>Body</Form.Label>
            <Form.Control as="textarea" onChange={handleChange} name="messageBody" value={formData.messageBody} rows={4} />
        </Form.Group>
        <Button type="submit">Submit</Button>
    </Form>)
}

export default NewMessageForm;