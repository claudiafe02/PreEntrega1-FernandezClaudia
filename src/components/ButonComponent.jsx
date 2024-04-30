import './ButonComponent.css';

export default function ButonComponent({nombre, color}) {
    return <button style={{backgroundColor: color}} className="styleButon">{nombre}</button>

}