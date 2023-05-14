import React from 'react'
import './Button.scss'

const Button = ({text, ...props}) => {
  return (
    <div {...props} className='button center'>{text}</div>
  )
}

export default Button