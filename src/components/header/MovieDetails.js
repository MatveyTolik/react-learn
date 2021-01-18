import React from 'react'
import {store} from "../../App";

export default function MovieDetails() {
  const movies = store.getState().movies[0];

  return (
    <>
      <div className="movies-detail">
        <button className={'search-button'}>Search</button>
        <div className={'image-block'}><img src={movies.img_url} alt='alt' className={'image'}/></div>
        <div className={'movie-information'}>
          <h2 className={'title'}>{movies.title}</h2>
          <div className={'rating'}>{movies.rating}</div>
          <div className={'year'}>{movies.year}</div>
          <div className={'duration'}>{movies.duration}</div>
          <div className={'description'}>{movies.about}</div>
        </div>
      </div>
    </>
  );
}


