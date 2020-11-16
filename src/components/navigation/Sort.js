import React from 'react'

export default function Sort() {
  return (
    <>
      <div className={'sort'}>
        <span> SORT BY </span>
        <select>
          <option>RELEASE DATE</option>
          <option>NEW</option>
        </select>
      </div>
    </>
  )
}
