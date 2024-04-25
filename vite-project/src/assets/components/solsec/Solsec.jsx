import React from 'react'
import './solsec.scss'
import Card from '../card/Card'
function Solsec({data}) {
  return (
    <div className='solsec'>
      <div className="container1">
    <h1>OUR SERVICES</h1>
    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
    </div>
    <div className="container2">
      {data.map(x=>{
        return <Card data={x}></Card>
      })}
    </div>
    </div>
  )
}

export default Solsec
