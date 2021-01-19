import React from 'react'
import * as yup from "yup";
import {Formik} from "formik";
import {store} from "../../App";
import {updateMovie} from "../../actions/movie_action";

export default function EditMovieForm() {
  const validationSchema = yup.object().shape({
    title: yup.string().typeError('you need to enter a string').required('required'),
    release_date: yup.date().typeError('you need to enter a date').required('required'),
    runtime: yup.number().typeError('you need to enter a number').required('required'),
  })

  return (
    <Formik
      initialValues={{
        id: store.getState().movies[0].id ?? '',
        title: store.getState().movies[0].title ?? '',
        release_date: store.getState().movies[0].year ?? '',
        movie_url: store.getState().movies[0].img_url ?? '',
        genre: store.getState().movies[0].description ?? '',
        overview: store.getState().movies[0].about ?? '',
        runtime: store.getState().movies[0].duration ?? '',
      }}
      validateOnBlur
      onSubmit={(values) => {store.dispatch(updateMovie(values)) }}
      validationSchema={validationSchema}
    >
      {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (

        <form className={'movie-form'}>
          <input type="button" name="close" value="X" className={'close'}/>
          <label className={'form-title'}>EDIT MOVIE:</label>
          <label className={'field-id'}>MOVIE ID</label>
          <input type="text" name={'id'} onChange={handleChange} onBlur={handleBlur} value={values.id}/>
          {touched.id && errors.id && <p className={'error'}>{errors.id}</p>}
          <label className={'field-title'}>TITLE</label>
          <input type="text" name={'title'} onChange={handleChange} onBlur={handleBlur} value={values.title}/>
          {touched.title && errors.title && <p className={'error'}>{errors.title}</p>}
          <label className={'release-date'}>RELEASE DATE</label>
          <input type="date" name={'release_date'} onChange={handleChange} onBlur={handleBlur} value={values.release_date}/>
          {touched.release_date && errors.release_date && <p className={'error'}>{errors.release_date}</p>}
          <label className={'movie-url'}>MOVIE URL</label>
          <input type="text" name={'movie_url'} onChange={handleChange} onBlur={handleBlur} value={values.movie_url}/>
          {touched.movie_url && errors.movie_url && <p className={'error'}>{errors.movie_url}</p>}
          <label className={'genre'}>GENRE</label>
          <select name="genre">
            <option value="Val1">Val 1</option>
            <option value="Val2">Val 2</option>
            <option value="Val2">Val 3</option>
          </select>
          <label className={'overview'}>OVERVIEW</label>
          <input type="text" name={'overview'} onChange={handleChange} onBlur={handleBlur} value={values.overview}/>
          {touched.overview && errors.overview && <p className={'error'}>{errors.overview}</p>}
          <label className={'runtime'}>RUNTIME</label>
          <input type="text" name={'runtime'} onChange={handleChange} onBlur={handleBlur} value={values.runtime}/>
          {touched.runtime && errors.runtime && <p className={'error'}>{errors.runtime}</p>}
          <button className={'reset'} type="reset" name="reset">Reset</button>
          <button className={'submit'} disabled={!isValid && !dirty} onClick={handleSubmit} type={"submit"}>SAVE</button>
        </form>
      )}
    </Formik>
  );
}
