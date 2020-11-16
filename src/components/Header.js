import React from 'react'
import AddMovie from './header/AddMovie';
import Search from './header/Search';

export default function Header() {
  return (
    <header>
      <AddMovie />
      <Search />
    </header>
  )
}
