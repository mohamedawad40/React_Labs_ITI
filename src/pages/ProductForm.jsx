import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getBookById } from '../api/bookApi';
import { addNewBookAction, editBookAction } from '../store/bookSlice';

export function ProductForm() {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    title: '',
    author: '',
    price: '',
    imageURL: ''
  });
  const [errors, setErrors] = useState({
    title: '',
    price: ''
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id !== '0') {
      const fetchData = async () => {
        const response = await getBookById(id);
        setBook(response.data);
      }
      fetchData();
    }
  }, [id]);

  const changeHandler = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
    setErrors({
      ...errors,
      [e.target.name]: ''
    });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (!validateForm()) return; // Check if the form is valid
      if (id === '0') {
        dispatch(addNewBookAction(book)).then(() => {
          navigate('/books');
        });
      } else {
        dispatch(editBookAction({ id, book })).then(() => {
          navigate('/books');
        });
      }
    } catch (error) {
      console.error('Error submitting book data:', error);
    }
  }

  const validateForm = () => {
    let valid = true;
    if (book.title.length < 5) {
      setErrors(prevErrors => ({
        ...prevErrors,
        title: 'Title must be at least 5 characters long'
      }));
      valid = false;
    }
    if (!/^\d+$/.test(book.price)) {
      setErrors(prevErrors => ({
        ...prevErrors,
        price: 'Price must be a number'
      }));
      valid = false;
    }
    return valid;
  }

  return (
    <div className='container my-2'>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Book Title"
            name="title" value={book.title} onChange={changeHandler} />
          <Form.Text className="text-danger">{errors.title}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" placeholder="Enter Author"
            name='author' value={book.author} onChange={changeHandler} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="Enter price"
            name='price' value={book.price} onChange={changeHandler} />
          <Form.Text className="text-danger">{errors.price}</Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit" className="my-2">
          {id === '0' ? 'Add Book' : 'Edit Book'}
        </Button>
      </Form>
    </div>
  )
}
