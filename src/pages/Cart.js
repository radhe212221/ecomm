import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
function Cart(props) {
    const { cart, user } = useSelector(s => s)
    const dispatch = useDispatch()
    const mycart = cart.filter(x => x.uid === user.id)

    const handleQty = (id, qty) => {
        axios.patch(`http://localhost:4000/cart/${id}`, { qty })
            .then(d => {
                let payload = cart.map(x => x.id === id ? d.data : x)
                dispatch({ type: "cart", payload })
                dispatch({ type: "msg", payload: "qty updated to " + qty })
            })
    }

    const handleRemove = id => {
        axios.delete(`http://localhost:4000/cart/${id}`)
            .then(d => {
                dispatch({ type: "cart", payload: cart.filter(x => x.id !== id) })
                dispatch({ type: "msg", payload: "removed from cart" })
            })
    }
    return <div className='container'>
        <h1>total cart ({mycart.length})</h1>
        <div className='tbl'>
            <table cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>sno</th>
                        <th>photo</th>
                        <th>qty</th>
                        <th>price</th>
                        <th>discount</th>
                        <th>actions</th>
                    </tr>
                </thead>

                <tbody>
                    {mycart?.map(x => <tr key={x.id}>
                        <td>{x.id}</td>
                        <td>
                            <img width={40} src={x.image} />
                        </td>
                        <td>
                            <button onClick={() => handleQty(x.id, x.qty - 1)} disabled={x.qty < 2}>-</button>
                            <strong>{x.qty}</strong>
                            <button onClick={() => handleQty(x.id, x.qty + 1)} disabled={x.qty > 20}>+</button>
                        </td>
                        <td>{Math.ceil(x.new * x.qty * x.discount / 100)}</td>
                        <td>{x.discount} % off</td>
                        <td>
                            <button onClick={() => handleRemove(x.id)}><i className='fa fa-trash-o'></i></button>
                        </td>
                    </tr>)}
                </tbody>

            </table></div>
    </div>
}
export default Cart
