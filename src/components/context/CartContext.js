import React from 'react'

import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

export default function CartProvider({ children }) {


 const [favorites, setfavorites] = useState(() => {
        const saveFav = localStorage.getItem('favoritesItems')
        return saveFav ? JSON.parse(saveFav) : []
    })
  
    const addToFavorites = (item) =>{
        setfavorites((prev) => {
            if(prev.some((i) => i.id === item.id)) return prev
            return [...prev, item]
        })
    }
    useEffect(() => {
        localStorage.setItem("favoritesItems" , JSON.stringify(favorites))
    }, [favorites])



    const [cartItems, setCartItems] = useState(() => {
        const saveCart = localStorage.getItem('cartItems')
        return saveCart ? JSON.parse(saveCart) : []
    })

    const increseQuntity = (id) => {
        setCartItems(prevItem => prevItem.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ))
    }

    const decreaseQuntity = (id) => {
        setCartItems(prevItem => prevItem.map(item => 
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item 
        ))
    }

    const removefromCart = (id) => {
        setCartItems(prevItem => prevItem.filter(item => item.id !== id))
    }

    const addToCart = (item) => {
        setCartItems((prevItem) => {
            const isExist = prevItem.find(i => i.id === item.id)
            if (isExist) {
                return prevItem.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)
            }
            return [...prevItem, { ...item, quantity: 1 }]
        })
    }

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])

    const removeFromFavorites =(id) =>{
        setfavorites((prev) => prev.filter((i) => i.id !== id))
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, increseQuntity, decreaseQuntity, removefromCart,addToFavorites,favorites,removeFromFavorites }}>
            {children}
        </CartContext.Provider>
    )
}