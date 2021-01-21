import React, {Component} from 'react'
import {connect} from "react-redux";

function mapStateToProps(state) {
  return {
    movies: state.movies
  }
}

class Details extends Component {
  render() {
    let movie = this.props.movies[this.props.id];
    return (
      <div>
        <h2>{movie.title}</h2>
        <img src={movie.img_url} alt={'alt'}/>
        <p>{movie.description}</p>
        <p>{movie.rating}</p>
        <p>{movie.year}</p>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Details);
