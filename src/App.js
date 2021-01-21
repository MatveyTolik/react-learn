import React from 'react';
import {Provider} from 'react-redux';
import rootReducer from "./reducers/rootReducers";
import Header from './components/Header';
import Navigation from './components/Navigation';
import MoviesList from './components/MoviesList';
import Details from "./containers/details";
import {createStore} from "redux";
import {BrowserRouter, Route, Switch, Redirect, Link} from 'react-router-dom';
import './style.css';

export const store = createStore(rootReducer);

const Home = () =>
  <>
    <Header store={store}/>
    <Navigation/>
    <MoviesList store={store}/>
  </>

const About = props =>
  store.getState().movies.hasOwnProperty(props.match.params.id) ?
    <>
      <Details store={store} id={props.match.params.id}/>
      <Navigation/>
      <MoviesList store={store}/>
    </>
    : <Redirect to={'/not-found'}/>

const MovieNotFound = () =>
  <>
    <Header store={store}/>
    <Navigation/>
    <div className={'movie-list'}>
      <h1>Oops! Movie not Found!</h1>
    </div>
  </>

const Error = () => <Redirect to={'/404'}/>

const ErrorPage = () =>
  <>
    <h1>404 <br/> Oops! Page not found!</h1>
    <Link to={"/"}><h2>Link to home</h2></Link>
  </>

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Provider store={store}>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/film/:id" component={About}/>
            <Route path="/not-found" component={MovieNotFound}/>
            <Route path="/404" component={ErrorPage}/>
            <Route component={Error}/>
          </Switch>
        </Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
