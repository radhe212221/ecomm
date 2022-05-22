import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';


function Checkout(props) {
    const navigate = useNavigate();


    const dispatch = useDispatch()
    const { users, user, cart, orders } = useSelector(s => s)
    const [ob, setob] = useState(user)
    const handleChange = e => {
        let { value, placeholder } = e.target
        setob({ ...ob, [placeholder]: value })
    }

    const handleClick = async () => {
        let mycart = cart.filter(x => x.uid === user.id)
        // for (let i = 0; i < mycart.length; i++) {
        //     let payload = mycart[i]
        //     let { id } = payload
        // }
        dispatch({type:"orders",payload:[...orders,...mycart]})
        dispatch({type:"cart",payload:cart.filter(x=>x.uid!==user.id)})

    }
    return <div className='form'>
        <h1>Checkout</h1>
        <div>
            <p>name</p>
            <input readOnly={true} value={ob.name} onChange={handleChange} placeholder='name' />
        </div>

        <div>
            <p>email</p>
            <input readOnly={true} value={ob.email} onChange={handleChange} placeholder='email' />
        </div>
        <div>
            <p>phone</p>
            <input readOnly={true} value={ob.phone} onChange={handleChange} placeholder='phone' />
        </div>


        <div>
            <p>password</p>
            <input readOnly={true} value={ob.password} onChange={handleChange} placeholder='password' />
        </div>

        <div>
            <button onClick={handleClick}>Checkout</button>
        </div>


    </div>
}
export default Checkout
