import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../../components/slideproduct/Product'
import './categorypage.css'

import SlideProdLoading from '../../components/slideproduct/SlideProdLoading'
import PageTransition from '../../components/PageTransition'

function CategoryPage() {
    const {category} = useParams()
    const [categoryProducts, setcategoryProducts] = useState([])

    const [loading, setloading] = useState(true)
    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${category}`)
        .then((res) => res.json())
        .then((data) => {
            setcategoryProducts(data)
        })
        .catch((error) => console.error(error))
        .finally(() => setloading(false))
    }, [category])
  return (
     <PageTransition key={category}>
    <div className='category_products'>

      {loading ? <SlideProdLoading key={category}/> : 
      <div className='container'>
        <div className='top_slide'>
          <h2>{category} {categoryProducts.limit}</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
        </div>
         <div className='products'>
            {categoryProducts.products.map((item, index) =>  (
                <Product item={item}key={index} />
            ))}
         </div>
      </div>
      }
      
    </div>
    </PageTransition>
  )
}

export default CategoryPage