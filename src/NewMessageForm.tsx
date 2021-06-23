import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

/** NewMessageForm
 * 
 * Props:
 * - username
 * - submit()
 * 
 * State:
 * - formData
 */
type NewMessageFormProps = {
    username?: string
    submit: (mutation, variable) => void
}
function NewMessageForm({ username, submit }: NewMessageFormProps) {
    const initialState = {username, body:""};
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
            <Form.Control 
                        onChange={handleChange} 
                        name="username" 
                        value={formData.username} 
                        type="text" 
                        placeholder="username" />
        </Form.Group>

        <Form.Group controlId="newMessageForm.messageBody">
            <Form.Label>Body</Form.Label>
            <Form.Control 
                        as="textarea" 
                        onChange={handleChange} 
                        name="body" 
                        value={formData.body} 
                        rows={4} />
        </Form.Group>

        <Button type="submit">Submit</Button>
    </Form>)
}

export default NewMessageForm;