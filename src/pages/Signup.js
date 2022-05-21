import React from 'react'
function Signup(props) {
    return <div className='form'>
        <h1>Signup</h1>
        <div>
            <p>name</p>
            <input placeholder='name'/>
        </div>

        <div>
            <p>email</p>
            <input placeholder='email'/>
        </div>
        <div>
            <p>phone</p>
            <input placeholder='phone'/>
        </div>


        <div>
            <p>password</p>
            <input placeholder='password'/>
        </div>

        <div>
            <button>Signup</button>
        </div>


    </div>
}
export default Signup
