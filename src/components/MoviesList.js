import React from 'react'
import FilmItem from './film_list/FilmItem';
import { movies } from './properties/movies';

export default function MoviesList() {
  return (
    <div className={'movie-list'}>
      {movies.map((movie) => (
        <FilmItem key={movie.id}
          props={movie}
        />
      ))}
    </div>
  )
}
