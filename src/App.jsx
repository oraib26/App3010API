import React from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'
import Products from './components/products/Products.jsx'
import PageNotFound from './components/pageNotFound/PageNotFound.jsx'
import Pizza from './components/resturant/pizza/Pizza.jsx'
import Hamburger from './components/resturant/hamburger/Hamburger.jsx'
import Fish from './components/resturant/fish/Fish.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/products' element={<Products />} />
          <Route path='/resturant/hamburger' element={<Hamburger />} />
          <Route path='/resturant/pizza' element={<Pizza />} />
          <Route path='/resturant/fish' element={<Fish />} />
          <Route path='*' element={<PageNotFound />} />

        </Routes>
        <Footer />
      </BrowserRouter>

    </>

  )
}

export default App