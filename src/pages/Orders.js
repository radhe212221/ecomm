import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
function Orders(props) {
    const { orders, user } = useSelector(s => s)
    const dispatch = useDispatch()
    const myorders = orders.filter(x => x.uid === user.id)

    return <div className='container'>
        <h1>total orders ({myorders.length})</h1>
        <div className='tbl'>
            <table cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>sno</th>
                        <th>photo</th>
                        <th>qty</th>
                        <th>price</th>
                        <th>discount</th>
                    </tr>
                </thead>

                <tbody>
                    {myorders?.map(x => <tr key={x.id}>
                        <td>{x.id}</td>
                        <td>
                            <img width={40} src={x.image} />
                        </td>
                        <td>
                            <strong>{x.qty}</strong>
                        </td>
                        <td>{Math.ceil(x.new * x.qty * x.discount / 100)}</td>
                        <td>{x.discount} % off</td>
                    </tr>)}
                </tbody>

            </table></div>
    </div>
}
export default Orders
