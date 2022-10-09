import React from 'react'

import '../styles/library_card.css'

export default function Library_Card(props) {

  return (
    <div className='Library_Card' style={{ background:props.color }}>
        <p>
          {props.name}
        </p>
    </div>
  )
}
