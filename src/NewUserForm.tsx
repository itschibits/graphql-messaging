import { useState } from "react";
import { Button } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import Form from "react-bootstrap/Form";
import { newUser } from "./graphql"

/** NewUserForm
 * 
 * Props:
 * - newUser()
 * 
 * State:
 * - formData
 * 
 * App -> NewUserForm
 */

function NewUserForm() {
    const initialState = { username: "", firstName: "", lastName: "" }
    const [formData, setFormData] = useState(initialState);
    const [addUser, { data }] = useMutation(newUser)

    function handleChange(evt: { target: { name: string, value: string; }; }){
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));
    }

    function handleSubmit(evt: { preventDefault: () => void; }){
        evt.preventDefault();
        console.log("handleSubmit");
        addUser({variables: {username: formData.username,
                             first_name: formData.firstName,
                             last_name: formData.lastName}});
    }
    
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Control 
                type="username"
                placeholder="username"
                name="username"
                value={formData["username"]}
                onChange={handleChange}/>
            <Form.Label>Username</Form.Label>
            <Form.Control 
                type="firstName"
                placeholder="First Name"
                name="firstName"
                value={formData["firstName"]}
                onChange={handleChange}/>
            <Form.Label>First Name</Form.Label>
            <Form.Control 
                type="lastName"
                placeholder="Last Name"
                name="lastName"
                value={formData["lastName"]}
                onChange={handleChange}/>
            <Form.Label>Last Name</Form.Label>

            <Button
                variant="primary"
                type="submit"
                onClick={handleSubmit}>
                Submit
            </Button>
        </Form>)
}

export default NewUserForm;

