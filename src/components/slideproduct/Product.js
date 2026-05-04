import React, { useContext } from 'react'
import { MdOutlineStar } from "react-icons/md";
import { IoStarHalf } from "react-icons/io5";
import { FaCartShopping, FaHeart, FaShare, FaCheck } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom'
import './slidepro.css'
import { CartContext } from '../context/CartContext';
import { toast } from 'react-hot-toast'

function Product({ item }) {
  const navigate = useNavigate()
  const { cartItems, addToCart,addToFavorites,favorites,removeFromFavorites } = useContext(CartContext)
  const isInCart = cartItems.some(i => i.id === item.id)

  const handleaddToCart = () => {
    addToCart(item)
    toast.success(
      <div className='toast-wrapper'>
        <img src={item.images?.[0]} alt="" className='toast-img' />
        <div className='toast-content'>
          <strong>{item.title}</strong>
          <span>Added to Cart</span>
          <button className='btn' onClick={() => navigate('/cart')}>View Cart</button>
        </div>
      </div>,
      { duration: 3500 }
    )
  }

    const isInFav = favorites.some(i => i.id === item.id)

  const handleAddToFav = () => {
  if(isInFav){
    removeFromFavorites(item.id)
    toast.error(`${item.title} Removed from Favorites`)
  } else {
    addToFavorites(item)
    toast.success(`${item.title} added To favorites`)
  }
}
  return (
    <div className={`product ${isInCart ? 'in_cart' : ''}`}>
      <Link to={`/products/${item.id}`}>
        <span className='status_cart'>
          <FaCheck /> incart
        </span>
        <div className='img_product'>
          <img src={item.images?.[0]} alt={item.title} />
        </div>
        <p className='name_product'>{item.title}</p>
        <div className='stars'>
          <MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><IoStarHalf />
        </div>
        <p className='price'><span>${item.price}</span></p>
      </Link>

      <div className='icons'>
        <span className='btn_addtocart' onClick={(e) => { e.preventDefault(); handleaddToCart(); }}>
          <FaCartShopping />
        </span>
        <span className={`${isInFav ? "in-fav" :""}`} onClick={handleAddToFav}><FaHeart /></span>
        <span><FaShare /></span>
      </div>
    </div>
  )
}

export default Product