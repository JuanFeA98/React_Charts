import React from 'react'
import { Link } from 'react-router-dom' 

export default function Home() {
  return (
    <div className="Home">
        <div>Home</div>
        <ul>
            <li><Link to='laboratory'>Laboratorio</Link></li>
        </ul>
    </div>
  )
}
