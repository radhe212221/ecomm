import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function Header(props) {
    const { loggedin, cart, orders, user } = useSelector(_state => _state)
    return <header>
        <h1>ecommerce</h1>
        <div>
            <Link to='/'>home</Link>
            {!loggedin && <Link to='/login'>login</Link>}
            {!loggedin && <Link to='/signup'>signup</Link>}
            {loggedin && <Link to='/cart'>cart ({cart.length})</Link>}
            {loggedin && <Link to='/orders'>orders ({orders.length})</Link>}
            {loggedin && <Link to='/checkout'>checkout</Link>}
            {loggedin && <Link to='/profile'>profile ({user?.name})</Link>}
            {loggedin && <Link to='/logout'>logout ({user?.name})</Link>}
        </div>
    </header>
}
export default Header
