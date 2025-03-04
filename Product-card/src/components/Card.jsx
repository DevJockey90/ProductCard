import React from 'react'
import ProductCard from './ProductCard'

import veganWrap from '../assets/veganWrap.jpg'
import FruitMeledy from '../assets/FruitMeledy.jpg'
import SweetyPalm from '../assets/SweetyPalm.jpg'

function Card() {
  return (
    <div className='product'>
        
   <ProductCard
      image={veganWrap}
   
   />
   <ProductCard 
      image={FruitMeledy}
   
   />
   <ProductCard 
      image={SweetyPalm}
   
   />

    </div>
  )
}

export default Card