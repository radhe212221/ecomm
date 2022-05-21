import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
function Login(props) {
    const navigate = useNavigate();

    const dispatch = useDispatch()
    const { users } = useSelector(s => s)
    const [ob, setob] = useState({
        email: "",
        password: ""
    })
    const handleChange = e => {
        let { value, placeholder } = e.target
        setob({ ...ob, [placeholder]: value })
    }

    const handleClick = () => {
        let test = users.some(x => x.email === ob.email && x.password === ob.password)
        if (test) {
            let user = users.find(x => x.email === ob.email && x.password === ob.password)
            dispatch({ type: "login", payload: user })
            navigate("/")
        }
        else {

            alert("failed")
            navigate("/signup")
        }
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
