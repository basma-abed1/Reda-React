import React, { useContext } from 'react'
import logo from "../../img/logo.png"
import { Link } from "react-router-dom"
import { CiHeart } from "react-icons/ci"
import { FaCartShopping } from "react-icons/fa6"
import "./header.css"
import { CartContext } from '../context/CartContext'
import SearchBox from './SearchBox'

export default function TopHeader() {

  const  {cartItems, favorites}  = useContext(CartContext)
  return (
    <div className='top_header'>
      <div className='container'>

        <Link to='/'>
          <img src={logo} alt="logo"/>
        </Link>

        <SearchBox />

        <div className='header_icons'>

          <div className='icon'>
            <Link to= "/favorites">
            <CiHeart />
            <span className='count'>{favorites.length}</span>
            </Link>
          </div>

          <div className='icon'>
            <Link to="/cart" className='icon'>
  <FaCartShopping />
  <span className='count'>{cartItems.length}</span>
</Link>
          </div>

        </div>

      </div>
    </div>
  )
}