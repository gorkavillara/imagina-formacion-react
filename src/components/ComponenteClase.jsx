import React from "react";

// props
// state

class ComponenteClase extends React.Component {
  state = {
    nombre: "Leire"
  }
  render() {
    const { texto } = this.props
    const { nombre } = this.state
    // const nombre = this.state.nombre
    return (
      <div>
        <p>{texto}</p>
        <p>Nombre: {nombre}</p>
      </div>
    );
  }
}

export default ComponenteClase;
