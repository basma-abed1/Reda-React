import React, { useContext } from 'react'
import { CartContext } from '../../components/context/CartContext'
import { FaTrashAlt } from "react-icons/fa";
import './cart.css'
import PageTransition from '../../components/PageTransition.js';


function Cart() {
    const { cartItems, increseQuntity, decreaseQuntity, removefromCart } = useContext(CartContext)

    // حساب المجموع مع التأكد من تحويل القيم لأرقام لتجنب ظهور NaN
    const total = cartItems.reduce((acc, item) => {
        const price = Number(item.price) || 0;
        const qty = Number(item.quantity) || 0;
        return acc + (price * qty);
    }, 0);

    return (
        <PageTransition>
        <div className='checkout'>
            <div className='ordersummary'>
                <h1>Order Summary</h1>

                <div className='items'>
                    {cartItems.length === 0 ? (
                        <p className="empty_msg">Your Cart is empty</p>
                    ) : (
                        cartItems.map((item, index) => (
                            <div className='item_cart' key={item.id || index}>
                                <div className='image_name'>
                                    <div className='img_item'>
                                        {/* عرض الصورة الأولى من المصفوفة */}
                                        <img src={item.images && item.images[0]} alt={item.title} />
                                    </div>

                                    <div className='content'>
                                        <h4>{item.title}</h4>
                                        <p className='price_item'>${Number(item.price).toFixed(2)}</p>
                                        <div className='quantity_control'>
                                            <button onClick={() => decreaseQuntity(item.id)}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => increseQuntity(item.id)}>+</button>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => removefromCart(item.id)} className='delete_item'>
                                    <FaTrashAlt />
                                </button>
                            </div>
                        ))
                    )}
                </div>

                <div className='bottom_summary'>
                    <div className='shop_table'>
                        <p>Total:</p>
                        <span className='total_checout'>${total.toFixed(2)}</span>
                    </div>
                    <div className='button_div'>
                        <button type='button'> Place Order</button>
                    </div>
                </div>
            </div>
        </div>
        </PageTransition>
    )
}

export default Cart;