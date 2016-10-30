import React, { PropTypes } from 'react';
import BasketItem from '../BasketItem';
import Totals from '../Totals';

const Basket = ({basket, removeProduct}) => {
  let items = basket.items.map((item, i) => <BasketItem key={i} id={i} item={item} removeFromBasket={removeProduct} />);
  let totals = basket.items.length ? <Totals subtotal={basket.subtotal} discount={basket.discount} total={basket.total} /> : null;
  return (
    <div className="cart">
      {items}
      {totals}
    </div>
  );
};

Basket.propTypes = {
  basket: PropTypes.object.isRequired
};

export default Basket;
