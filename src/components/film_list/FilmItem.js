import React from 'react'
import image from '../images/Kill_Bill_Volume_2.png'; // with import

export default function FilmItem({props}) {

  return (

    <div className="film-item">
      <div className={'actions'}>...</div>
      <img src={image} alt='alt' className={'image'}/>
      <h2 className={'title'}>{props.title}</h2>
      <div className={'year'}>{props.year}</div>
      <div className={'description'}>{props.description}</div>
    </div>
  );
}

