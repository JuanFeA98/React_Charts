import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="Home">
        <div>Home</div>
        <Link to='/laboratorio'>Laboratorio</Link>
    </div>
  )
}
