import React from 'react'

import { useEffect, useState } from 'react'
import { IoMdMenu, IoMdArrowDropdownCircle } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom'




const navlinks = [
  { title: "Home", link: "/home" },
  { title: "About", link: "/about" },
  { title: "Accessories", link: "/accessories" },
  { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/contact" }
]


export default function ButtonHeader() {
  const location = useLocation()
  const [categories, setcategories] = useState([])
  const [isCategoryOpen, setisCategoryOpen] = useState(false)
  

  useEffect(() => {
    setisCategoryOpen(false)
  }, [location])
  useEffect(() => {
  fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data) => {
      const uniqueCategories = [...new Set(data.products.map(item => item.category))]
      setcategories(uniqueCategories)
    })
}, [])

  return (
    <div className='btn_header'>
      <div className='container'>
        <nav className='nav'>
          <div className='category_nav'>
            
            <div className='category_btn' onClick={() => setisCategoryOpen(!isCategoryOpen)}>
              <IoMdMenu />
              <p>Browse Category</p>
              <IoMdArrowDropdownCircle />
            </div>

            <div className={`category-nav-list ${isCategoryOpen ? "active" : ""}`}>
              {categories.map((category, index) => (
  <Link key={index} to={`/category/${category}`}>
    {category}
  </Link>
))}
            </div>

          </div>
           <div className='nav_links'>
              {navlinks.map((item) => (
                <li key={item.link} className={location.pathname === item.link ? "active" : ""}>
                  <Link to={item.link}>{item.title}</Link>
                </li>
              ))}
            </div>
        </nav>

        

      </div>
    </div>
  )
}
