import {combineReducers} from "redux";
import {moviesData} from '../store/moviesData'
import {ADD_MOVIE, DELETE_MOVIE, UPDATE_MOVIE} from "../actions/actions";

const initialState = {
  movies: moviesData,
  // theme: 'light',
}

function moviesReducers(state = initialState.movies, action) {
  switch (action.type) {
    case ADD_MOVIE:
      console.log(state)
      return state.concat([action.payload]);
    case DELETE_MOVIE:
      return state.filter( item => item !== action.movie );
    case UPDATE_MOVIE: // NEED HELP...
      // return  {
      //     ...state,
      //     links: state.map((existingLink, currentIndex) => action.payload.id === currentIndex ? action.buu : existingLink)
      // }
      return state;
    default:
      return state;
  }
}

// function themeReducers(state = initialState.theme, action) {
//   switch (action.type) {
//     case 'ADD_MOVIEA':
//       return {...state, theme: "dark"};
//     default:
//       return state;
//   }
// }

export default combineReducers ({
  movies: moviesReducers,
  // theme: themeReducers,
})
