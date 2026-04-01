import React from 'react'

const Button = (text, className, icons) => {
  return (
    <div className={`btn ${className}`}>
      {text}
      {icons && <img src='/image/arrow.svg'/>}
    </div>
  )
}

export default Button
