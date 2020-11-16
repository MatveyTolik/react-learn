import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MoviesList from './components/MoviesList';
import './style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <MoviesList />
    </div>
  );
}

export default App;
