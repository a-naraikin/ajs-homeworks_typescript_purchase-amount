import Cart from '../server/Cart';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items).toBe(undefined);
});
