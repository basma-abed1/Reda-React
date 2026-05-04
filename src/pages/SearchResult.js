import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PageTransition from "../components/PageTransition"
import Product from '../components/slideproduct/Product'
import SlideProdLoading from '../components/slideproduct/SlideProdLoading'


function SearchResult() {
    const [results, setResults] = useState ()
    const query = new URLSearchParams(useLocation().search).get("query")

    const [loading , setloading] = useState(true)
    useEffect(() => {
        const fetchResults = async () => {
        try{
         const res = await fetch(`https://dummyjson.com/products/search?q=${query}`)
         const data = await res.json()
         setResults(data.products || [])
            }
         catch(error){
          console.error("Search Error :" , error)
        } finally{
          setloading(false)
        }

        }
        if (query) fetchResults()
    }, [query])
  return (
        <PageTransition key={query}>
 <div className='category_products'>

      {loading ? <SlideProdLoading key={query}/> : 
        results.length > 0 ? (
          <div className='container'>
        <div className='top_slide'>
          <h2>Results for : {query}</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
        </div>
         <div className='products'>
            {results.map((item, index) =>  (
                <Product item={item}key={index} />
            ))}
         </div>
      </div>
        ) : <div className='container'><p>No Results Found</p></div>
      }
      
    </div>
        </PageTransition>

  )
}

export default SearchResult