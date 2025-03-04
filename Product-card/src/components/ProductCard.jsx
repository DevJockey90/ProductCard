import React from 'react'
import './ProductCard.css'

import Image from '../assets/veganWrap.jpg'

function ProductCard(props) {
  return (
    <div className='card_box'>
        
        <img src={props.image} alt="" />
        <div className="description">
          <h2></h2>
          <p className='price'><span></span></p>
          <p className='para'></p>
            <button className='btn'>Buy Now</button>

        </div>

    </div>
  )
}

export default ProductCard