import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function TopBar(props) {
    const { msg } = useSelector(_state => _state)
    if (!msg) return null
    return <nav>
        <h1>{msg}</h1>
    </nav>
}
export default TopBar
