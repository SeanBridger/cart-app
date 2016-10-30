import React, { PropTypes } from 'react';

const Totals = ({subtotal, discount, total}) => {
  return (
    <div className="totals">
      <p><b>Sub Total:</b> ${subtotal}</p>
      <p><b>Discount:</b> ${discount}</p>
      <p><b>Total:</b> ${total}</p>
    </div>
  );
};

Totals.propTypes = {
  subtotal: PropTypes.string.isRequired,
  discount: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired
};

export default Totals;
