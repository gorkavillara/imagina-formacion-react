import { useParams } from 'react-router-dom';

export default function DetalleProducto() {
  const { idProducto } = useParams();

  return (
    <div>
      <h1>Detalles del producto {idProducto}</h1>
    </div>
  );
}