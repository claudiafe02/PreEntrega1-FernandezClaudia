import carrito from '../assets/carrito.jpg';

export default function CartWidgetComponent() {
    const carritoStyle ={
        width: '35px',
        height: '35px',
        marginRight: '7px'
    }
    return (
        <div>
          <img style={carritoStyle} src={carrito} alt="carrito de compras "/>0         
        </div>
    )
}