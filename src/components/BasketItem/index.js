import React, { PropTypes } from 'react';

const BasketItem = ({item, id, removeFromBasket}) => {
  return (
    <div className="cart-item">
      <p className="name">{item.name}</p>
      <p className="price">${item.price}</p>
      <a className="btn" onClick={() => removeFromBasket(id) }>x</a>
    </div>
  );
};

BasketItem.propTypes = {
 item: PropTypes.object.isRequired,
 id: PropTypes.number.isRequired,
 removeFromBasket: PropTypes.func.isRequired
};

export default BasketItem;
