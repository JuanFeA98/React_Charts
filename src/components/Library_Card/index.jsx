import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export default function Library_Card(props) {

  return (
    <Link to={ props.enlace } className='Library_Card' style={{ background:props.background }}>
      <p style={{ color:props.color }}>
        {props.name}
      </p>
    </Link>
  )
}
