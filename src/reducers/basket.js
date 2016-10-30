import money from 'money-math';

function basket(state = {}, action) {
  switch(action.type) {
    case 'ADD_PRODUCT':
      let items = state.items;
      items.push(action.product);
      return Object.assign({}, ...state, { items, ...calculateTotals(items) } );
    case 'REMOVE_PRODUCT':
      let new_items = state.items;
      new_items.splice(action.index, 1);
      return Object.assign({}, ...state, { items: new_items, ...calculateTotals(new_items) } );
    default:
      return state;
  }
}

export default basket;

function countInBasket(items, code) {
  return items.reduce((total, x) => {
    return x.id === code ? total + 1 : total;
  }, 0);
}

function calculateDiscount(items, item) {
  let discount = money.floatToAmount(0.0);
      let count = countInBasket(items, item.id);
      if(Math.floor(count/item.promo[0])) {
        let offersCompleted = Math.floor(count/item.promo[0]);
        let numFree = item.promo[0] - item.promo[1];
        let productPrice = item.price;
        let multBy = offersCompleted * numFree;
        if(multBy > 0) {
          discount = money.add(discount, money.mul(multBy.toFixed(2), productPrice));
        }
      }
    return discount;
}

function calculateTotals(items) {
  let subtotal = "0.00";
  let discount = "0.00";
  let total = "0.00";
  let discountsApplied = [];
  const len = items.length;
  for(let i = 0; i<len; i++) {
    subtotal = money.add(subtotal, items[i].price);
    if(items[i].promo.length && !discountsApplied.includes(items[i].id) ) {
      discount = money.add(discount, calculateDiscount(items, items[i]));
      discountsApplied.push(items[i].id);
    }
  }

  total = money.subtract(subtotal, discount);
  return {
    subtotal,
    discount,
    total
  }
}
