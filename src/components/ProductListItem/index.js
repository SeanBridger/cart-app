import React, { PropTypes } from 'react';

const ProductListItem = ({product,addToBasket}) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src="http://placehold.it/600x600" alt=""/>
      </div>
      <div className="product-info">
        <h5>{product.name}</h5>
        <h6>${product.price}</h6>
        <a className="btn" onClick={() => addToBasket(product) }>Add</a>
      </div>
    </div>
  );
};

ProductListItem.propTypes = {
 product: PropTypes.object.isRequired,
 addToBasket: PropTypes.func.isRequired
};

export default ProductListItem;
