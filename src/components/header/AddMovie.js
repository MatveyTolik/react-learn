import React from 'react'
import AddMovieForm from '../action_form/AddMovieForm';
import EditMovieForm from '../action_form/EditMovieForm';

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {display: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      display: !state.display
    }));
  }

  render() {
    const {display} = this.state

    return (
      <>
        <button className={'add-movie'} onClick={this.handleClick}>
          <h2>ADD MOVIE</h2>
        </button>
        <EditMovieForm/>
        {display && (
          <AddMovieForm/>
        )}
      </>
    );
  }
}
