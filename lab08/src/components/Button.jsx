import React from 'react'

export default function Button({children, variant, size, onClick}) {

    const buttonStyle={
        padding:size==="small" ? '10px' : '15px',
        font:size="small" ? "8px" :"12px",
        backgroundColor: variant === 'primary' ? 'blue' : 'gray',
        color: 'white',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
    }
  return (
    <button  style={buttonStyle} onClick={onClick}>
        {children}
    </button>
  )
}
