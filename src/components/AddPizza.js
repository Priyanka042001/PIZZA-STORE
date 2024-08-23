import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

function AddPizza() {
  const navigate = useNavigate();
  const location = useLocation();
  const fetchPizzas = location.state?.fetchPizzas || (() => {});

  const formik = useFormik({
    initialValues: {
      src: '',
      title: '',
      description: ''
    },
    validationSchema: Yup.object({
      src: Yup.string().required('Image URL is required'),
      title: Yup.string().min(5, 'Title must be at least 5 characters').required('Title is required'),
      description: Yup.string().min(10, 'Description must be at least 10 characters').required('Description is required'),
    }),
    onSubmit: (values) => {
      axios.post('http://localhost:5000/Pizzas', values)
        .then(response => {
          fetchPizzas();  // Fetch updated pizza list
          navigate('/');  // Navigate back to the home page or pizza gallery after adding
        })
        .catch(error => {
          console.log(error);
        });
    },
  });

  return (
    <div className='container mt-4'>
      <h2>Add Pizza</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='src' className='form-label'>Image URL</label>
          <input
            id='src'
            name='src'
            type='text'
            className='form-control'
            value={formik.values.src}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.src && formik.errors.src ? (
            <div className='text-danger'>{formik.errors.src}</div>
          ) : null}
        </div>

        <div className='mb-3'>
          <label htmlFor='title' className='form-label'>Title</label>
          <input
            id='title'
            name='title'
            type='text'
            className='form-control'
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.title && formik.errors.title ? (
            <div className='text-danger'>{formik.errors.title}</div>
          ) : null}
        </div>

        <div className='mb-3'>
          <label htmlFor='description' className='form-label'>Description</label>
          <input
            id='description'
            name='description'
            type='text'
            className='form-control'
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.description && formik.errors.description ? (
            <div className='text-danger'>{formik.errors.description}</div>
          ) : null}
        </div>

        <button type='submit' className='btn btn-primary'>Add Pizza</button>
      </form>
    </div>
  );
}

export default AddPizza;
