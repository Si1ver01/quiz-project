import React from 'react'
import './Backdrop.css'

const Backdrop = props => {
  return (
    <div className='backdrop' onClick={() => props.isClose()}>
      
    </div>
  )
}

export default Backdrop
