import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



import SlidProd from "../../components/slideproduct/SlideProd.js";
import Productinfo from './Productinfo'
import ProductImages from './ProductImages'


import './productDetails.css'
import ProductDetailsLoading from './ProductDetailsLoading.js';
import SlideProdLoading from '../../components/slideproduct/SlideProdLoading.js';
import PageTransition from '../../components/PageTransition.js';

function ProductDetails() {
    const {id} = useParams()
    const [product , setProduct] = useState(null)
    const [loading , setloading] = useState(true)
    const [relatedProducts , setRelatedProducts] = useState([])
    const [loadingrelatedProducts , setLosdingRelatedProducts] = useState(true)


    useEffect(() => {
        const fetchProduct = async () =>{
          try{
                const res = await fetch(`https://dummyjson.com/products/${id}`)
                const data = await res.json()
                setProduct(data)
                setloading(false)
            }catch (error){
              console.log(error)
            }
        }

      fetchProduct()        
    } , [id])

    useEffect(() => {
      if(!product) return 
      fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) =>{
         setRelatedProducts(data.products)
      })
      .catch((error) => console.error(error))
      .finally(() => setLosdingRelatedProducts(false))
    } , [product])

    if(!product) return <p>Product not Found</p>
  return (
    <PageTransition key={id}>
    <div>
   {loading ? (
     <ProductDetailsLoading />
    ):(
<div className='item_details'>
       <div className='container'>
          <ProductImages product ={product}/>
          <Productinfo product ={product}/>
       </div>
    </div>    )}
    
    
    

    {loadingrelatedProducts ? (
     <SlideProdLoading />
    ):(
      <SlidProd key={product.category} data={relatedProducts} title={product.category.replace("." , " ")}/>
    )}
    </div>
    </PageTransition>
  )
}

export default ProductDetails