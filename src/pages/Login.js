import React from 'react'
function Login(props) {
    return <div className='form'>
        <h1>login</h1>
        <div>
            <p>username</p>
            <input placeholder='username'/>
        </div>

        <div>
            <p>password</p>
            <input placeholder='password'/>
        </div>

        <div>
            <button>login</button>
        </div>


    </div>
}
export default Login
