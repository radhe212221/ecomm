import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
function Logout(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handleLoigout = () => {
        dispatch({type:"logout"})
        navigate("/")

    }
    return <div className='container'>
        <h1>Logout</h1>
        <button onClick={handleLoigout}>click to logout</button>
    </div>
}
export default Logout
