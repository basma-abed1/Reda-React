import React from 'react'

import './App.css';
import TopHeader from './components/header/TopHeader';
import ButtonHeader from './components/header/ButtonHeader';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './pages/productDetails/ProductDetails';
import Cart from './pages/cart/Cart';
import { Toaster } from 'react-hot-toast';
import ScrollTop from './components/ScrollTop';
import { AnimatePresence } from 'framer-motion';
import CategoryPage from './pages/CategoryPages/CategoryPage';
import SearchResult from './pages/SearchResult';
import Favorites from './pages/favorites/Favorites';
import LogIn from './pages/logIn/LogIn';

function App() {
  return (
    <div className="App">
      
      <header>
        <TopHeader />
        <ButtonHeader />
      </header>

      <Toaster 
        position='bottom-right' 
        reverseOrder={false}
        toastOptions={{
          style: {
            background: '#fff',
            color: '#333',
            borderRadius: '8px',
            padding: '16px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }
        }}
      />

      <ScrollTop />

     
      <main>
        <AnimatePresence>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/search' element={<SearchResult />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/products/:id' element={<ProductDetails />} />
            <Route path='/category/:category' element={<CategoryPage />} />
            <Route path='/login' element={<LogIn />}/>
          </Routes>
        </AnimatePresence>
      </main>

    </div>
  );
}

export default App;