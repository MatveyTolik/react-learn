import React from 'react'

export default class DeleteMovieForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className={'delete-movie-form'}>
        <input type="button" name="close" value="X" className={'close'}/>
        <label className={'form-title'}>DELETE MOVIE:</label>
        <label className={'field-title'}>Are you sure you want to delete this movie&</label>
        <input className={'submit'} type="submit" value="confirm"/>
      </form>
    );
  }
}
