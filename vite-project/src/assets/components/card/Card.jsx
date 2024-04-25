import React from 'react'

function Card({x}) {
  return (
    <div>
      <h1>{x.id}</h1>
      <p>{x.description}</p>
    </div>
  )
}

export default Card
