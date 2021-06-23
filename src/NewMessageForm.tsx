import Form from "react-bootstrap/Form";

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

    return (<Form>
        <Form.Group controlId="newMessageForm.username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="username" />
        </Form.Group>
    </Form>)
}

export default NewMessageForm;