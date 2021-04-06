function _search(arr, id) {
  return arr.find(item => item.product_id === id);
}

module.exports = {
  add(cart, item) {
    cart.contents.push(item);
    cart.count++;
    cart.total += +item.price;
    return cart;
  },

  change(cart, id, amount) { //amount === 1/-1
    let find = _search(cart.contents, +id);
    find.amount += amount;
    cart.total += (+find.price * amount);
    cart.count += amount;
    return cart;
  },

  del(cart, id, amount) {
    let find = _search(cart.contents, +id);
    if (cart.count !== 0 && cart.total !== 0) {
      cart.contents.splice(cart.contents.indexOf(find), 1);
      cart.count += amount;
      cart.total += (+find.price * amount);
      return cart;
    }
  },
};