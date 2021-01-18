import {ADD_MOVIE, DELETE_MOVIE, UPDATE_MOVIE} from "./actions";

export function addMovie(movie) {
  return {
    type: ADD_MOVIE,
    payload: movie
  }
}

export function deleteMovie(movie) {
  return {
    type: DELETE_MOVIE,
    movie
  }
}

export function updateMovie(movie) {
  return {
    type: UPDATE_MOVIE,
    payload: movie,
  }
}
