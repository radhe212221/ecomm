import React from 'react'
import { useSelector } from 'react-redux'
function Home(props) {
    const { tags, filters, col, products } = useSelector(_state => _state)

    const handleFilter = x => {
        console.log("clicked on filter button", x)
    }

    const handleTag = x => {
        console.log("handleTag", x)
    }

    return <main>
        <div className='left'>
            {tags.map(x => <p key={x.t} onClick={() => handleTag(x.t)}>{x.t}
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
                <input placeholder='search' />
            </div>
            <div className='products'>
                {products?.map(x => <div key={x.name} className='item'>
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
                    <div className='cart-btn'>
                        <i className='fa fa-shopping-cart'></i>
                    </div>
                </div>)}
            </div>
        </div>
    </main>



}
export default Home
