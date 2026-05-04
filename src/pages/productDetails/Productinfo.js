import React from 'react'

import { MdOutlineStar } from "react-icons/md";
import { IoStarHalf } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6"
import { FaHeart } from "react-icons/fa6";
import { FaShare } from "react-icons/fa6";

import { CartContext } from '../../components/context/CartContext';
import { useContext } from 'react';
import { toast } from 'react-hot-toast'
import {useNavigate } from 'react-router-dom'



function Productinfo({product}) {

const { cartItems, addToCart, favorites,addToFavorites, removeFromFavorites } = useContext(CartContext)
  const isInCart = cartItems.some(i => i.id === product.id)

 const navigate = useNavigate()


        const handleaddToCart = () => {
    addToCart(product)
    toast.success(
      <div className='toast-wrapper'>
        <img src={product.images?.[0]} alt="" className='toast-img' />
        <div className='toast-content'>
          <strong>{product.title}</strong>
          <span>Added to Cart</span>
          <button className='btn' onClick={() => navigate('/cart')}>View Cart</button>
        </div>
      </div>,
      { duration: 3500 }
    )
  }

const isInFav = favorites.some(i => i.id === product.id)

  const handleAddToFav = () => {

    if(isInFav){
      removeFromFavorites(product.id)
      toast.error(`${product.title} Removed from Favorites`)
    }else{
      addToFavorites(product)
    toast.success(`${product.title} added To favorits`)
    }
    addToFavorites(product)
    toast.success(`${product.title} added To favorits`)
  }

    
  return (
    <div className='details_item'>
            <h1 className='name'>{product.title}</h1>
            <div className='stars'>
                <MdOutlineStar />
                         <MdOutlineStar />
                          <MdOutlineStar />
                           <MdOutlineStar />
                           <IoStarHalf />
            </div>
            <p className='price'>{product.price}</p>
              <h5>Availability : <span>{product.availabilityStatus}</span></h5>
              <h5>prand : <span>{product.brand}</span></h5>
              <p className='descripion'>{product.description}</p>
              <h5 className='stock'> <span>Hurry Up only {product.stock}  products left stock</span></h5>

              <button className={`btn  ${isInCart ? 'in_cart' : ''}`}  onClick={handleaddToCart}> {isInCart ? "item in cart" : "add in cart"}<FaCartShopping /></button>

              <div className='icons'>
                      
                      <span className={`${isInFav ? "in-fav" :""}`} onClick={handleAddToFav}> <FaHeart /> </span>
                      <span> <FaShare /></span>
                    </div>
          </div>
  )
}

export default Productinfo