import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';


function Checkout(props) {
    const navigate = useNavigate();


    const dispatch = useDispatch()
    const { users } = useSelector(s => s)
    const [ob, setob] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    })
    const handleChange = e => {
        let { value, placeholder } = e.target
        setob({ ...ob, [placeholder]: value })
    }

    const handleClick = () => {
        if (users.some(x => x.email === ob.email && x.password === ob.password)) {
            alert("already exists")
            navigate("/login")

        }
        else {
            axios.post("http://localhost:4000/users", ob)
                .then(d => {
                    dispatch({ type: "login", payload: ob })
                    navigate("/")
                })
                .catch(e => {
                    alert(e.message)
                })
        }
    }
    return <div className='form'>
        <h1>Signup</h1>
        <div>
            <p>name</p>
            <input value={ob.name} onChange={handleChange} placeholder='name' />
        </div>

        <div>
            <p>email</p>
            <input value={ob.email} onChange={handleChange} placeholder='email' />
        </div>
        <div>
            <p>phone</p>
            <input value={ob.phone} onChange={handleChange} placeholder='phone' />
        </div>


        <div>
            <p>password</p>
            <input value={ob.password} onChange={handleChange} placeholder='password' />
        </div>

        <div>
            <button onClick={handleClick}>Signup</button>
        </div>


    </div>
}
export default Checkout
