import React from 'react'

import { useEffect,useState } from 'react'
import Router from 'next/router'
import { AiOutlineShoppingCart } from 'react-icons/ai';
AiOutlineShoppingCart
import Link from 'next/link'

const jwt = require('jsonwebtoken')

export default function Navbar() {
  const [name,set] = useState(null)
  const handleclick = () =>{
    if(name === null){
      Router.push("/login")
    }
    else{
      localStorage.removeItem('jwt')
      set(null)
    }

  }
  useEffect(()=>{
    try{

      const token = localStorage.getItem('jwt')
      const data = jwt.decode(token)
      const email = data.formemail
      set(email.split('@')[0])
    }
    catch{

    }
    },[])
  return (
    <header id='' className="text-black bg-white w-nav shadow-xl body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href={'/'}>
      <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        <span className="ml-3 text-xl text-black mx-5 ">Codeswear.com</span>
      </a>
        </Link>
      <nav className="flex flex-col md:flex-row md: justify-start justify-between">
        <ul className="flex items-center space-x-2 font-bold">
          <Link href={'/Tshirts'}><a><li>Tshirt</li></a></Link>
          <Link href={'/'}><a><li>Mug</li></a></Link>
          <Link href={'/'}><a><li>Hoodies</li></a></Link>
          <Link href={'/'}><a><li>Stickers</li></a></Link>
        </ul>
        
      </nav>
      <button onClick={handleclick} className="inline-flex items-center border-0 py-1 px-3 focus:outline-none bg-indigo-600 mx-12 rounded text-white mt-4 md:mt-0 ">{name ? 'Logout' : 'Login'}
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
      <div className="cart absolute right-28 top-6 mx-5">
      <AiOutlineShoppingCart className="text-2xl"/>
      </div>
    </div>
  </header>
  )
}
