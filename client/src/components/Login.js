import React from 'react'
import {useState} from 'react'
import apiService from '../services/ApiService'
export default function Login() {

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [userName, setUserName] = useState("");




  // function handleSubmit(event){
  // event.preventDefault();
  // apiService.register({
  // email: email,
  // userName: userName,
  // password: password
  // }).then((data) => {
  // setEmail("");
  // setUserName("");
  // setPassword("");
  // })
  // }

  // const validateForm = () => {
  //   return (
  //     !email || !password || !userName
  //   );
  // };


  // return (
  //   <div>
  //     <h1>Register</h1>
  //     <form className='registerForm' onSubmit={handleSubmit}>
  //     <input type='text' placeholder='username'  value={userName}  onChange={(e) => setUserName(e.target.value)}>
  //     </input>
  //     <input type='text' placeholder='name@email.com' value={email}  onChange={(e) => setEmail(e.target.value)}>
  //     </input>
  //     <input type='text' placeholder='password'  value={password}  onChange={(e) => setPassword(e.target.value)}>
  //     </input>
  //     <button type="submit" className="register-button" disabled={validateForm()}>
  //     Submit
  //     </button>
  //     </form>
  //     </div>
  // )
}

