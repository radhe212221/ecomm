import React, { useState } from 'react'

function Login(props) {

    const [ob, setob] = useState({
        email: "",
        password: ""
    })
    const handleChange = e => {
        let { value, placeholder } = e.target
        setob({ ...ob, [placeholder]: value })
    }

    const handleClick = () => {

    }
    return <div className='form'>
        <h1>Login</h1>
        <div>
            <p>email</p>
            <input value={ob.email} onChange={handleChange} placeholder='email' />
        </div>
        <div>
            <p>password</p>
            <input value={ob.password} onChange={handleChange} placeholder='password' />
        </div>

        <div>
            <button onClick={handleClick}>Login</button>
        </div>


    </div>
}
export default Login
