import React from 'react';
import renderer from 'react-test-renderer';
import AddMovieForm from './AddMovieForm';

it('Snapshot to AddMovieForm', () => {
  const tree = renderer.create(<AddMovieForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
