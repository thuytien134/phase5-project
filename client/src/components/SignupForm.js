import React, { useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from './context/User';
import { IsLoginContext } from './context/IsLogin';
import { Alert } from 'react-bootstrap';



export default function SignupForm() {
  const {setUser} = useContext(UserContext)
  const {setIsLogin} = useContext(IsLoginContext)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate()

    function handleSubmit(e) {
       
        e.preventDefault();
        setErrors([]);
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
            password_confirmation: passwordConfirmation,
          })
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => {
            navigate('/login')
          
            setIsLogin(true)
            setUser(user)});
          } else {
            r.json().then((err) => setErrors(err.error));
          }
        });
      }

    return (
        <div>
            <form 
            onSubmit={handleSubmit}
            style={{ paddingLeft: "30%", paddingRight: "30%", paddingTop: "30px", display: "flex", flexDirection: "column" }}>
                <label>User name: <br/>
                    <input
                    style={{width:"100%"}}
                    value={username}
                    onChange={(e)=> setUsername(e.target.value)}
                    placeholder='enter username'/>
                </label>
                <label>Password: <br/>
                    <input 
                    style={{width:"100%"}}
                    type="password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    placeholder='enter password'/>

                </label>
                <label>Confirm Password: <br/>
                    <input
                    style={{width:"100%"}}
                    type="password"
                    value={passwordConfirmation}
                    onChange={(e)=>setPasswordConfirmation(e.target.value)}
                    placeholder='confirm password'/>
                </label>
                {errors.length === 0 ? "" : <Alert  >{errors}</Alert>}
                 <br/>
                <button style={{backgroundColor:"turquoise"}}> Sign up</button>
            </form>
        </div>
    )
}
