import React, {Component} from 'react'
import {updateMovie} from "../../actions/movie_action";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

function mapStateToProps(state) {
  return {
    movies: state.movies
  }
}

function matchDipatchToProps(dispatch) {
  return bindActionCreators({updateMovie: updateMovie}, dispatch)
}

class FilmItem extends Component {

  render() {
    return (
      <div className="film-item">
        <div className={'actions'}>...</div>
        <img src={this.props.movie.img_url} alt='alt' className={'image'}/>
        <h2 className={'title'}>{this.props.movie.title}</h2>
        <div className={'year'}>{this.props.movie.year}</div>
        <div className={'description'}>{this.props.movie.description}</div>
      </div>
    );
  }
}
export default connect(mapStateToProps, matchDipatchToProps)(FilmItem);
