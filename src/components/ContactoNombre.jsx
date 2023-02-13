import React from 'react'
import { useParams } from 'react-router-dom';

const ContactoNombre = () => {
  const { nombre } = useParams();
  return (
    <div>Bienvenido {nombre}</div>
  )
}

export default ContactoNombre