
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useContext } from 'react';
import { Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './context/User';
import { IsLoginContext } from './context/IsLogin';


export default function LoginForm() {
    const { setUser } = useContext(UserContext)
    const { setIsLogin } = useContext(IsLoginContext)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user) => {
                    setUser(user)
                    setIsLogin(true);
                });
            } else {
                r.json().then((err) => setErrors(err));
            }
        });
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}
                style={{ paddingLeft: "30%", paddingRight: "30%", paddingTop: "30px", display: "flex", flexDirection: "column" }}>
                <Form.Group className="mb-1" controlId="formBasicUsername">
                    <Form.Label>User name</Form.Label>
                    <Form.Control
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text" placeholder="Enter your user name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password" placeholder="Password" />
                </Form.Group>
                {errors.length === 0 ? "" : <Alert severity="error" >{errors.error}</Alert>}
                <Button variant="primary" type="submit">
                    {isLoading ? "Loading..." : "Login"}
                </Button>
                <Form.Text style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}> Don't have an account?
                    <Button variant="info" onClick={() => navigate("/signup")}>Sign up</Button>
                </Form.Text>
            </Form>

        </div>
    )
}
