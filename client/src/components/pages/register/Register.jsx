import axios from "../../../utils/axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setError(false);
    const res = await axios.post("/auth/register", {
      username, email, password
    });
    res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  
  };
  return (
    <div className="register">
       <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text"
         className="registerInput" placeholder="Enter Username"
         onChange={e => setUsername(e.target.value)}
         />
        <label>Email</label>
        <input type="text"
        className="registerInput"
        placeholder="Enter email address"
        onChange={e => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input type="password"
        className="registerInput"
        placeholder="Enter Password"
        onChange={e => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">Register</button>
      </form>

      <button className="registerLoginButton">
        <Link className="link" to="/login">Login</Link>
      </button>
      {error && <span style={{color:"red", marginTop: "10px"}}>Email or Username already exist</span>}
    </div>
  )
}
