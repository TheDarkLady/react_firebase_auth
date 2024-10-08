import React from 'react'

export default function Common_input({type, placeholder, name, value, onChange, className}) {
  console.log(type, placeholder, name, value, onChange, className)
  return (
    <input type={type || 'text'} placeholder={placeholder || "Enter Value"} value={value} onChange={onChange} name={name} className={className || 'w-full block px-5 py-2 mt-2 text-black rounded-lg'} />
  )
}
