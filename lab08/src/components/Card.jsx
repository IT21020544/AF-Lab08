import React from 'react'
import Button from './Button'
export default function Card({image, title, description}) {

    const handleClick = () =>{
        alert("Wow you clicked!!! What a Genius")
    }

    const handleNotClick = () =>{
        alert("Come on! What an idiot")
    }

  return (
    <div className='card'><center><img src={image} alt={title} style={{resizeMode:'center', height:300, width:270}}/></center>
    <h3>{description}</h3>
    <Button variant="primary" size="small" onClick={handleClick}>Click</Button>
    <br/>
    <Button variant="secondary" size="big" onClick={handleNotClick}>Do not click!</Button>
    </div>
  )
}
