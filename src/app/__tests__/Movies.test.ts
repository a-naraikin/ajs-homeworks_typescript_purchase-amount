import Movie from '../domain/Movie';

test('should add a movie', () => {
  const movie = new Movie(1001, 'Мстители', 250, 2012, 'США', 'слоган', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137);
  const expected  = {
    id: 1001,
    price: 250,
    country: "США",
    name: "Мстители",
    slogan: "слоган",
    year: 2012,
    genre: ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    time: 137,
    _time: "137 мин./2:17",
  }

  expect(movie).toEqual(expected);
});
