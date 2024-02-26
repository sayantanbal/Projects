import React, {useState, useContext}  from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <h2> Login </h2>
        <input type="text" placeholder='username'
        value={username}
        onChange={(event) => {setUsername(event.target.value)}}
        />

        <input type="text" 
        value={password}
        onChange={(event) => {setPassword(event.target.value)}}placeholder='password'/>
        <button onClick={handleSubmit}></button>
    </div>
  )
}

export default Login
