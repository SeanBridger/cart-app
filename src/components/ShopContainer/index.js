import React from 'react';
import ProductList from '../ProductList';
import Basket from '../Basket';
import '../../App.css'

const ShopContainer = React.createClass({
  render() {
    return (
      <div className="cart-app">
        <ProductList {...this.props} />
        <Basket {...this.props} />
      </div>
    )
  }
});

export default ShopContainer;
