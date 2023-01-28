import React from 'react'

function Home(props) {
    return (
        <div>
            <h1>ADD AND REMOVE ITEMS</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="	https://theawesomer.com/photos/2017/09/apple_iphone_x_t.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>I-Phone</span>
                    <span>Price: $1000.00 </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
                        <button className='remove-cart-btn'
                    onClick={
                        ()=>{props.removeToCartHandler()}
                        }>
                        Remove To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home