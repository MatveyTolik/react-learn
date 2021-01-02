import React from 'react'

export default class EditMovieForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className={'movie-form'}>
        <input type="button" name="close" value="X" className={'close'}/>
        <label className={'form-title'}>EDIT MOVIE:</label>
        <label className={'field-title'}>TITLE</label>
        <input type="text"/>
        <label className={'release-date'}>RELEASE DATE</label>
        <input type="date"/>
        <label className={'movie-url'}>MOVIE URL</label>
        <input type="text"/>
        <label className={'genre'}>GENRE</label>
        <select name="genre">
          <option value="Val1">Val 1</option>
          <option value="Val2">Val 2</option>
          <option value="Val2">Val 3</option>
        </select>
        <label className={'overview'}>OVERVIEW</label>
        <input type="text"/>
        <label className={'runtime'}>RUNTIME</label>
        <input type="text"/>
        <input className={'reset'} type="button" name="reset" value="reset"/>
        <input className={'submit'} type="submit" value="submit"/>
      </form>
    );
  }
}
