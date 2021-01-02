import React, { useState } from 'react'
import AddMovieForm from '../action_form/AddMovieForm';

export default function AddMovie() {

  const [display, setDisplay] = useState(false)
  return (
    <>
      <button className={'add-movie'} onClick={() => setDisplay(true)}>
        <h2>ADD MOVIE</h2>
      </button>
      {display && (
        <AddMovieForm/>
      )}
    </>
  )
}
