import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Form, Button } from 'react-bootstrap';
import { validateEmail } from '../../utils/helpers';

function Contact(props) {
    const [ formState, setFormState ] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [ errorMessage, setErrorMessage ] = useState('');
    const { setContactSelected } = props;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            
            if(!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
    };

    return (
        <Modal.Dialog>
            <Modal.Body>
                <Form id="contact-form" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label htmlFor="email">Email Address:</Form.Label>
                        <Form.Control name="email" type="email"  defaultValue={email} placeholder="Enter Email Here" onBlur={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label htmlFor="name">Name:</Form.Label>
                        <Form.Control name="name" type="text" defaultValue={name} placeholder="Enter your name here" onBlur={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicMessage">
                        <Form.Label htmlFor="message">Message:</Form.Label>
                        <Form.Control name="message" as="textarea" rows={4} defaultValue={message} placeholder="Enter your message here" onBlur={handleChange} />
                    </Form.Group>

                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}

                    <Button variant="primary" type="submit" onClick={() => setContactSelected(false)}>Submit!</Button>
                </Form>
            </Modal.Body>
        </Modal.Dialog>
    )
}

export default Contact;