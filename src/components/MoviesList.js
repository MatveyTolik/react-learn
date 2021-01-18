import React, {Component} from 'react'
import FilmItem from './film_list/FilmItem';
import {connect} from "react-redux";

function mapStateToProps(state) {
  return {
    movies: state.movies
  }
}

class MoviesList extends Component {
  showList() {
    if (!this.props.movies.map) {
      return;
    }
    return this.props.movies.map((movie) => {
      return (
        <FilmItem key={movie.id} movie={movie}/>
      )
    });
  }

  render() {
    return (
      <div className={'movie-list'}>
        {this.showList()}
      </div>
    )
  }
}

export default connect(mapStateToProps)(MoviesList);
