import React from 'react'

import { useContext } from 'react'
import { CartContext } from '../../components/context/CartContext'
import PageTransitionEvent from '../../components/PageTransition'
import Product from '../../components/slideproduct/Product'

function Favorites() {
    
  const {favorites} = useContext(CartContext)

  return (
    <PageTransitionEvent>
       <div className='category_products favoritesPage'>
         <div className='container'>
            <div className='top_slide'>
                <h2>Your Favorites</h2>
            </div>
            {favorites.length === 0 ?  (
                <p>No Favorites yet</p>
            ) : (
                <div className='products'>
                    {favorites.map((item , index) => (
                        <Product item={item} key={index}/>
                    ))}
                </div>
            )}
         </div>
       </div>
    </PageTransitionEvent>
  )
}

export default Favorites