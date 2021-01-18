import React, {Component} from 'react'
import {connect} from "react-redux";

function mapStateToProps(state) {
  return  {
    movie: state.active
  }
}

class Details extends Component {
  showList () {
    return this.props.movies.map ((movie) => {
      return (
        <li onClick={() => this.props.select (movie)} key={movie.id}>{movie.title}</li>
      );
    });
  }

  render() {
    if(!this.props.movie) {
      return (<p>hello</p>);
    }
    return (
      <div>
        <h2>{this.props.movie.title}</h2>
        <img src={this.props.movie.img_url} alt={'buu'}/>
        <p>{this.props.movie.description}</p>
        <p>{this.props.movie.rating}</p>
        <p>{this.props.movie.year}</p>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Details);
