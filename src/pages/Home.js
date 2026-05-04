import React, { useEffect, useState } from 'react'
import HeroSlider from '../components/HeroSlider'

import './home/home.css'
import SlideProd from '../components/slideproduct/SlideProd'
import SlideProdLoading from '../components/slideproduct/SlideProdLoading'
import PageTransitionEvent from '../components/PageTransition'
const categories = [
  "smartphones",
  "mobile-accessories",
  "laptops",
  "tablets",
  "sunglasses",
  "sports-accessories"
]
function Home() {
  const[products, setProducts] = useState({})
  const[loading, setloading] = useState(true)


useEffect(() => {
  const fetchProducts = async () => {
    try{
      const results = await Promise.all(
        categories.map(async (category) => {
          const res = await fetch(`https://dummyjson.com/products/category/${category}`)
          const data =await res.json()
          return{[category] : data.products}
        })
      ) 

const productData = Object.assign({}, ...results)     
 setProducts(productData)


    }catch (error){
      console.log("Error Fetches")
    } finally{
      setloading(false)
    }
  }
  fetchProducts()
}, [])
console.log(products)
  return (
    <PageTransitionEvent >
    <div>
        <HeroSlider />


        {loading ? (
          categories.map((category) => (
     <SlideProdLoading key={category}/>
     ))

) : categories.map((category) => (
  <SlideProd 
    key={category} 
    data={products[category]} 
    title={category}
  />
))}
       
        
    </div>
    </PageTransitionEvent>
  )
}

export default Home