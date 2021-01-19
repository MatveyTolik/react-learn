import React from 'react'
import {Formik} from 'formik';
import * as yup from 'yup'
import {store} from "../../App";
import {addMovie} from "../../actions/movie_action";

export default function AddMovieForm() {
  const validationSchema = yup.object().shape({
    title: yup.string().typeError('you need to enter a string').required('required'),
    release_date: yup.date().typeError('you need to enter a date').required('required'),
    runtime: yup.number().typeError('you need to enter a number').required('required'),
  })

  return (
    <Formik
      initialValues={{
        title: '',
        release_date: '',
        movie_url: '',
        genre: '',
        overview: '',
        runtime: '',
      }}
        validateOnBlur
        onSubmit={(values) => {store.dispatch(addMovie(values)) }}
        // onSubmit={(values) => {console.log(values) }}
        validationSchema={validationSchema}
            >
   {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (

      <form className={'movie-form'}>
        <input type="button" name="close" value="X" className={'close'}/>
        <label className={'form-title'}>ADD MOVIE:</label>
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
        <button className={'submit'} disabled={!isValid && !dirty} onClick={handleSubmit} type={"submit"}>Submit</button>
      </form>
     )}
    </Formik>
  );
}
