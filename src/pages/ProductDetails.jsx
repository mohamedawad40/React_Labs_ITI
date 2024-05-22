import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductById } from '../store/bookSlice';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export function ProductDetails() {
  const{ book, isLoading , error}= useSelector(state=>state.bookSlice)
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  return (
    <>
      {isLoading && (
        <h1 className="alert alert-primary text-center">Loading...</h1>
      )}
      {!isLoading && error && (
        <h1 className="alert alert-danger text-center">Error: {error}</h1>
      )}
      {book && (
        <div>
          {/* <div>Book Details</div> */}
          <div className='d-flex justify-content-center'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={book.imageURL} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                  Author: {book.author}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Price: {book.price}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                {/* <Card.Link className='btn btn-success mx-1' href="#">Add to Cart</Card.Link> */}
                <Link className='btn btn-primary mx-1' to='/books'>Back to Books</Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}
