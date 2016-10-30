export function addProduct(product) {
  return {
    type: 'ADD_PRODUCT',
    product
  }
}

export function removeProduct(index) {
  return {
    type: 'REMOVE_PRODUCT',
    index
  }
}
