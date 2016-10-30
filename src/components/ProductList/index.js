import React, { PropTypes } from 'react';
import ProductListItem from '../ProductListItem';

const ProductList = ({products, addProduct}) => {
  let items = products.map((product) => <ProductListItem key={product.name} product={product} addToBasket={addProduct} /> );
  return (
    <section className="products">
      {items}
    </section>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductList;
