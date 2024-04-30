import './NavBarComponent.css';
import ButonComponent from "./ButonComponent";
import CartWidgetComponent from './CartWidgetComponent';


export default function NavBarComponent() {
    return (
        <header className="barraStyle">
            <h1 className='nombreTienda'>Natural Life</h1>
            {/* <h2>Productos naturales</h2> */}
            <nav className='barraButons'>
            <ButonComponent nombre="Alimentos Naturales" color="yellow"/>
            <ButonComponent nombre="Despensa" color="orange"/>
            <ButonComponent nombre="Bebidas e Infuciones" color="lightgreen"/>
            </nav>
            <CartWidgetComponent />
        </header>
    )
}