import moviesReducers from "./rootReducers";
import {moviesData} from "../store/moviesData";
import {addMovie, deleteMovie} from "../actions/movie_action";

// test data
let initialState = {
  movies: moviesData,
}

let add_action = addMovie(  {
  id: '7',
  title: 'Pulp Fiction',
  description: 'Action & Advanture',
  about: 'Bohemian Rhapsody is a 2018 biographical drama film about Freddie Mercury, the lead singer of the British rock band Queen. It was directed by Bryan Singer from a screenplay by Anthony McCarten, and produced by Graham King and Queen manager Jim Beach.',
  img_url: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
  year: '2004',
  rating: '4.3',
  duration: '195',
},);
let delete_action = deleteMovie(1)

test('new post Should be added', () => {
  // action
  let newState = moviesReducers(initialState, add_action)

  expect(newState.movies.length).toBe(7)
});

test('title Should be ...', () => {
  // action
  let newState = moviesReducers(initialState, add_action)

  // expectation
  expect(newState.movies[6].title).toBe('Pulp Fiction')
});

test('Delete movie item', () => {
  // action
  let newState = moviesReducers(initialState, delete_action)

  // expectation
  expect(newState.movies.length).toBe(6)
});
