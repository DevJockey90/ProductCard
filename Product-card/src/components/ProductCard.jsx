import React from 'react'
import './ProductCard.css'

import Image from '../assets/veganWrap.jpg'

function ProductCard(props) {
  return (
    <div className='card_box'>
        
        <img src={props.image} alt="" />
        <div className="description">
          <h2>{props.name}</h2>
          <p className='price'>{props.disc_price}<span>{props.price}</span></p>
          <p className='para'>{props.description}</p>
            <button className='btn'>Buy Now</button>

        </div>

    </div>
  )
}

export default ProductCard