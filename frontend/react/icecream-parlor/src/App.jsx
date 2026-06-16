import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Products from './components/Products'
import Navbar from './components/Navbar'
import TodaysOffer from './pages/TodaysOffer'
import StoreLocator from './pages/StoreLocator'
import Franchies from './pages/Franchies'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IcecreamDetail from './components/IcecreamDetailPage'

function App() {

  const products = [
    {
      id: 1,
      name: "Vanilla Delight",
      ingreat: "Creamy Vanilla",
      price: 99,
      image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc"
    },
    {
      id: 2,
      name: "Chocolate Heaven",
      ingreat: "Rich Chocolate",
      price: 119,
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371"
    },
    {
      id: 3,
      name: "Strawberry Bliss",
      ingreat: "Fresh Strawberry",
      price: 109,
      image: "https://images.unsplash.com/photo-1488900128323-21503983a07e"
    },
    {
      id: 4,
      name: "Mango Magic",
      ingreat: "Alphonso Mango",
      price: 129,
      image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f"
    },
    {
      id: 5,
      name: "Butterscotch Crunch",
      ingreat: "Crunchy Caramel Bits",
      price: 119,
      image: "https://images.unsplash.com/photo-1516559828984-fb3b99548b21"
    },
    {
      id: 6,
      name: "Black Currant Dream",
      ingreat: "Black Currant Flavor",
      price: 139,
      image: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57"
    },
    {
      id: 7,
      name: "Pista Royale",
      ingreat: "Premium Pistachio",
      price: 149,
      image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a"
    },
    {
      id: 8,
      name: "Kesar Kulfi",
      ingreat: "Saffron & Milk",
      price: 159,
      image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc"
    },
    {
      id: 9,
      name: "Cookie & Cream",
      ingreat: "Chocolate Cookies",
      price: 149,
      image: "https://images.unsplash.com/photo-1514849302-984523450cf4"
    },
    {
      id: 10,
      name: "Rainbow Scoop",
      ingreat: "Mixed Fruit Flavors",
      price: 169,
      image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc"
    }
  ];


  return (
    <BrowserRouter>
      <Header />
      <Navbar />

      <Routes>
        <Route path='/' element={<Products products={products}></Products>}></Route>

        <Route path='/offer' element={<TodaysOffer />}> </Route>

        <Route path='/store-loc' element={<StoreLocator />}></Route>
        {/* <Franchies /> */}

        <Route path='/details/:ID' element={<IcecreamDetail  products={products} />}></Route>

      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
