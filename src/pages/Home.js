import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
function Home(props) {
    const { loggedin, tags, filters, col, products, search, tagname, order, cart, user } = useSelector(_state => _state)
    const dispatch = useDispatch()
    const handleFilter = x => {
        // console.log("clicked on filter button", x)
        dispatch({ type: "col", payload: x })
    }

    const handleTag = x => {
        // console.log("handleTag", x)
        dispatch({ type: "tagname", payload: x })
    }

    const handleChange = e => {
        dispatch({ type: "search", payload: e.target.value })
        // console.log(e.target.value)
    }
    const handleClearAll = () => {
        dispatch({ type: "tagname", payload: "" })
        dispatch({ type: "search", payload: "" })
    }

    const getQty = (pid, uid) => {
        return cart?.find(x => x.pid === pid && x.uid === uid)?.qty || 0
    }
    const _products = products
        .filter(x => x?.tags.startsWith(tagname))
        .filter(x => Object.values(x).join('').includes(search))
        .sort((x, y) => order ? (x[col] - y[col]) : (y[col] - x[col]))

    const handleCart = (_product, _user, _cart) => {
        let condition = _cart.some(x => x.uid === _user.id && _product.id === x.pid)
        if (condition) {
            let data = _cart.find(x => x.uid === _user.id && _product.id === x.pid)
            let { id, qty } = data
            qty = qty + 1
            let payload = cart.map(x => x.id === id ? ({ ...x, qty }) : x)
            dispatch({ type: "cart", payload })
            dispatch({ type: "msg", payload: "cart updated" })
        }
        else {
            let uid = _user.id
            let pid = _product.id
            let payload = {
                ...user,
                ..._product,
                qty: 1,
                uid,
                pid,
                id: cart.length + 1
            }
            dispatch({ type: "cart", payload: [...cart, payload] })
            dispatch({ type: "msg", payload: "added to cart" })
        }
    }

    return <main>
        <div className='left'>
            {tags.map(x => <p className={x.t === tagname ? "active" : ""} key={x.t} onClick={() => handleTag(x.t)}>{x.t}
                <span>({x.c})</span>
            </p>)}
        </div>
        <div className='right'>
            <div className='filters'>
                {filters.map((x) => (
                    <button
                        key={x}
                        onClick={() => handleFilter(x)}
                        className={col === x ? 'active' : ''}
                    >
                        <i className="fa fa-sort"></i>
                        {x}
                    </button>
                ))}
                <input placeholder='search' value={search} onChange={handleChange} />
                <span onClick={handleClearAll} className='clear-filters'> x clear filters</span>
            </div>
            <div className='products'>
                {_products?.map(x => <div key={x.name} className='item'>
                    <img width={100} height={100} src={x.image} />
                    <div className='title'>{x.title}</div>
                    <div className='desc'>{x.description}</div>
                    <div className='old'>{x.old}</div>
                    <div className='new'>{x.new}</div>
                    <div className='rating'>
                        <i style={{ color: 1 <= x?.rating ? 'orange' : "silver" }} className='fa fa-star'></i>
                        <i style={{ color: 2 <= x?.rating ? 'orange' : "silver" }} className='fa fa-star'></i>
                        <i style={{ color: 3 <= x?.rating ? 'orange' : "silver" }} className='fa fa-star'></i>
                        <i style={{ color: 4 <= x?.rating ? 'orange' : "silver" }} className='fa fa-star'></i>
                        <i style={{ color: 5 <= x?.rating ? 'orange' : "silver" }} className='fa fa-star'></i>
                    </div>
                    <div className='discount'>{x.discount} % off</div>
                    <div className='tags'>{x.tags}</div>
                    {loggedin && <div onClick={() => handleCart(x, user, cart)} className='cart-btn'>
                        <i className='fa fa-shopping-cart'></i> ({getQty(x.id, user.id)})
                    </div>}
                </div>)}
            </div>
        </div>
    </main>



}
export default Home
