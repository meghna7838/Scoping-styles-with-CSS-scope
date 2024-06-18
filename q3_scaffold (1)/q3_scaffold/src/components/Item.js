import itemstyle from "./item.module.css";

export default function Item({ itemstyle }) {
  return (
    <div className="container">
      <h3 className="title">{itemstyle.title}</h3>
      <img src={itemstyle.image} alt={itemstyle.title} className="image" />
      <p>
        <strong className="price">${itemstyle.price}</strong>
      </p>
      <p>{itemstyle.description}</p>
    </div>
  );
}
