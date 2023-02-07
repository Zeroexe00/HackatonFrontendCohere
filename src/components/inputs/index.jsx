import React from 'react'
import './style.css'
export default function inputs() {
  return (
    <div className='main'>
      <h1>Haz un blog post con IA en minutos!</h1>
      <p>Introduce las palabras claves que tienes en mente para el titulo</p>
      <input className='inputs' type="text" name="keywords-title" />
      <p>Introduce el tema del blog</p>
      <input className='inputs' type="text" name="keywords-body" />
    </div>
  )
}
