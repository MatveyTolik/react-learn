import React, { useState, useEffect, useCallback } from 'react'
import { movies } from '../properties/movies';
import image from "../images/Kill_Bill_Volume_2.png";

export default function MovieDetails() {

  const [headerDisplay, setHeaderDisplay] = useState('header');

  const consoleMessage = useCallback((movies) => {
    console.log(movies[0]);
  }, []);

  useEffect(() =>  {
    consoleMessage(movies)
  }, [consoleMessage]);
  return (
    <>
      <div className="movies-detail">
        <button className={'search-button'} onClick={() => setHeaderDisplay('header')}>Search</button>
        <div className={'image-block'}><img src={image} alt='alt' className={'image'}/></div>
        <div className={'movie-information'}>
          <h2 className={'title'}>{movies[0].title}</h2>
          <div className={'rating'}>{movies[0].rating}</div>
          <div className={'year'}>{movies[0].year}</div>
          <div className={'duration'}>{movies[0].duration}</div>
          <div className={'description'}>{movies[0].about}</div>
        </div>
      </div>
    </>
  );
}


