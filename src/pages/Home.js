import React from 'react'
import { Link } from 'react-router-dom'

import LibraryCard from '../components/Library_Card'

import '../styles/home.css'

export default function Home() {
  return (
    <div className="Home">
        <div>Home</div>
        <Link to='/laboratorio'>Laboratorio</Link>
        <div className="home_container">
          <LibraryCard name='Prueba' color='rgb(30, 29, 29)'></LibraryCard>
          <LibraryCard name='Prueba' color='rgb(30, 29, 29)'></LibraryCard>
          <LibraryCard name='Prueba' color='rgb(30, 29, 29)'></LibraryCard>
          <LibraryCard name='Prueba' color='rgb(30, 29, 29)'></LibraryCard>
          <LibraryCard name='Prueba' color='rgb(30, 29, 29)'></LibraryCard>
          <LibraryCard name='Prueba' color='rgb(30, 29, 29)'></LibraryCard>
        </div>
    </div>
  )
}
