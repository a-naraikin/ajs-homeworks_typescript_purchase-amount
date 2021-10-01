import Cart from '../server/Cart';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items).toBe(undefined);
});

test('should return a non-empty cart', () => {
  const movieOne = new Movie(1001, 'Мстители', 250, 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137);
  const movieTwo = new Movie(1002, 'Мстители: Финал', 350, 2019, 'США', 'Avenge the fallen', ['фантастика', 'боевик', 'драма', 'приключения'], 181);

  const cart = new Cart();
  cart.add(movieOne);
  cart.add(movieTwo);

  expect(cart.getAll().length).toBe(2);
});
