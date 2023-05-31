import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/laboratorio.css'

export default function Laboratorio() {
  return (
    <div className="Laboratorio">
        <div>Laboratorio</div>
        <Link to='/'>Go Home</Link>
    </div>
  )
}
