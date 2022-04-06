import React, { useState } from "react";

function Item({ name, category }) {
const [itemPresent, setItemPresent] = useState(false)

const addToCart = itemPresent ? 'in-cart' : ''

const handleClick = (e) => {
  setItemPresent(!itemPresent)
}
  return (
    <li className={addToCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={itemPresent ? "remove" : 'add'} onClick={handleClick}>{itemPresent ? 'Remove from Cart' : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
