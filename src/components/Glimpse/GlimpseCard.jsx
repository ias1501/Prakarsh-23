import React from 'react'
import LazyLoad from 'react-lazy-load'

const GlimpseCard = (props) => {
  return (
    <LazyLoad>
    <div data-aos={props.item.Animation}>
      <img className='gimg mx-auto' src={props.item.EventimageSource} alt="" />
    </div>
    </LazyLoad>
  )
}

export default GlimpseCard