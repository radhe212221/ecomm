import React, { useState } from 'react'

function Login(props) {
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
