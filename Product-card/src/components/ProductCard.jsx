import React from 'react'
import './ProductCard.css'

import Image from '../assets/veganWrap.jpg'

function ProductCard() {
  return (
    <div className='card_box'>
        
        <img src={Image} alt="" />
        <div className="description">
          <h2>Sol Wrap</h2>
          <p className='price'>$5.50 <span>$8.50</span></p>
          <p className='para'>This delicious Sol Wrap is packed with nothing but favor! <br/>
            Being that it is vegan you can never go wrong with what your <br/>
            taste buds desire.</p>
            <button className='btn'>Buy Now</button>

        </div>

    </div>
  )
}

export default ProductCard