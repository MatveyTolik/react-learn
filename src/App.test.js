import React from 'react'
import {create} from 'react-test-renderer'
import ReactDOM from 'react-dom'
import App from './App';

test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div)
  ReactDOM.unmountComponentAtNode(div)
});

describe("Profile Status component", () => {
  test('status from props should be in the state', () => {
    const component = create(<App status="buu"/>)
    const root = component.root;
    let span = root.findByType('div')
    span.props.onDoubleClick();

    expect(span).not.toBeNull()
    expect(() => {
      let input = root.findByType("input");
    }).toThrow();
  })
})
