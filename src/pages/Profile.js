import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';


function Profile(props) {
    const navigate = useNavigate();


    const dispatch = useDispatch()
    const { users, user } = useSelector(s => s)
    const [ob, setob] = useState(user)
    const handleChange = e => {
        let { value, placeholder } = e.target
        setob({ ...ob, [placeholder]: value })
    }
    const handleClick = () => {
        axios.patch("http://localhost:4000/users/" + ob.id, ob)
            .then(d => {
                dispatch({ type: "users", payload: users.map(x => x.id === ob.id ? d.data : x) })
            })
            .catch(e => {
                alert(e.message)
            })
    }
    return <div className='form'>
        <h1>Profile</h1>
        <div>
            <p>name</p>
            <input value={ob.name} onChange={handleChange} placeholder='name' />
        </div>

        <div>
            <p>email</p>
            <input disabled={true} value={ob.email} onChange={handleChange} placeholder='email' />
        </div>
        <div>
            <p>phone</p>
            <input disabled={true} value={ob.phone} onChange={handleChange} placeholder='phone' />
        </div>


        <div>
            <p>password</p>
            <input value={ob.password} onChange={handleChange} placeholder='password' />
        </div>

        <div>
            <button onClick={handleClick}>update</button>
        </div>


    </div>
}
export default Profile
