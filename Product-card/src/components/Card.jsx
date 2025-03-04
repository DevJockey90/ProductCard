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
      name="Sol Wrap"
      disc_price='$6.50'
      price='$8.99'
      description='This delicious Sol Wrap is packed with nothing but favor!
            Being that it is vegan you can never go wrong with what your
            taste buds desire.'
    />
   <ProductCard 
      image={FruitMeledy}
      name="Fruit Melody"
      disc_price='$7.50'
      price='$9.99'
      description='This delicious Sol Wrap is packed with nothing but favor!
            Being that it is vegan you can never go wrong with what your
            taste buds desire.'
   
   />
   <ProductCard 
      image={SweetyPalm}
      name="Sweety Palm"
      disc_price='$7.50'
      price='$8.99'
      description='This delicious Sol Wrap is packed with nothing but favor!
            Being that it is vegan you can never go wrong with what your
            taste buds desire.'
   
   />

    </div>
  )
}

export default Card