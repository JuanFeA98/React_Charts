import React from 'react'
import { Link } from 'react-router-dom'

import LibraryCard from '../components/Library_Card'

import '../styles/home.css'

export default function Home() {
  return (
    <div className="Home">
        <div className="home_main">
          <h2>Home</h2>
          <Link to='/laboratorio'>Laboratorio</Link>
        </div>
        <div className="home_container">
          <LibraryCard 
            name='Victory Charts' 
            // enlace='/victory_charts'
            background='#07072c' 
            color='white' 
            >
          </LibraryCard>
          <LibraryCard 
            name='Prueba' 
            background='#276931'
            color='white'
            >
          </LibraryCard>
          <LibraryCard  
            name='Prueba' 
            background='#3ba8da'
            color='white'
            >
          </LibraryCard>
          <LibraryCard 
            name='Prueba' 
            background='#d8da3b'
            color='black'
            >
          </LibraryCard>
          <LibraryCard 
            name='Prueba' 
            background='#da3b3b'
            color='white'
            >
          </LibraryCard>
          <LibraryCard 
            name='Prueba' 
            background='#8b34a0'
            color='white'
            >
          </LibraryCard>
        </div>
    </div>
  )
}
