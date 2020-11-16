import React from 'react'

export default function Search() {
  return (
    <>
      <textarea rows="1" cols="50" name="text"></textarea>
      <button className={'search'}>
        <h2>SEARCH!</h2>
      </button>
    </>
  )
}
