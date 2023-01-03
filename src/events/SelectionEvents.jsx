import React from 'react'

const SelectionEvents = () => {
  const texto = "El usuario selecciona algún fragmento de texto del elemento."

  const handleSelect = event => {
    const start = event.target.selectionStart;
    const end = event.target.selectionEnd;
    const selectedText = event.target.value.substring(start, end);
    console.log(`Texto seleccionado: ${selectedText}`);
  }

  return <textarea onSelect={handleSelect} defaultValue={texto} />
}

export default SelectionEvents