import './ItemListContainer.css';

export default function ItemListContainer({greeting}) {
    return (
        <section className="container">
            <h3 className="saludo">{greeting}</h3>
        </section>
    );
}