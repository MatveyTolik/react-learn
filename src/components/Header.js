import React, {useState} from 'react'
import AddMovie from './header/AddMovie';
import MovieDetails from './header/MovieDetails';
import Search from './header/Search';


export default function Header() {
  const [details] = useState(false);

  return (
    <header>
      { details ?
        (
          <MovieDetails/>
        ) : (
          <>
            <AddMovie/>
            <Search/>
          </>
        )
      }
    </header>
  )
}
