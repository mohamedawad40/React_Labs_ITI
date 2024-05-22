import {  useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link, Navigate, useLoaderData } from "react-router-dom";
import { deleteBook } from "../api/bookApi";
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBookAction, getAllBookAction } from '../store/bookSlice';


export function ProductTable() {
  const dispatch = useDispatch()
    const { data } = useLoaderData();

    const{ books, isloading , error}= useSelector(state=>state.bookSlice)
 

    useEffect( ()=>{
      dispatch(getAllBookAction(),deleteBookAction())
    },[])


    const deleteHandler = async (bookId) => {
        Swal.fire({
          title: 'Are you sure?',
          text: 'You will not be able to recover this book!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'Cancel'
        }).then(async (result) => {
          if (result.isConfirmed) {
            try {
              await dispatch(deleteBookAction(bookId)).then (() => {
                Navigate('/books');
              });
              Swal.fire('Deleted!', 'Your book has been deleted.', 'success');
            } catch (error) {
              console.error("Error deleting book:", error);
              // Swal.fire('Error!', 'There was an error deleting the book.', 'error');
            }
          }
        });
      }


    
    return (
    <div className="container mt-5">

    <div className='d-flex p-5'>
    <Link to="/books/0/edit">
    <i class="fs-1 text-success bi bi-person-add"></i>
    </Link>
    </div>
    {isloading && <h1 className='alert alert-info '>loading...</h1>}
    {error ? <h1 className='alert alert-danger'>Can't reload Books</h1> :
        <Table striped bordered hover responsive="md">
    <thead className="table-dark">
        <tr>
            <th>Name</th>
            <th>Author</th>
            <th>Price</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
    {books &&
                books.map((book) => {
                  return (
                    <>
                      <tr key={book.id}>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.price}</td>

                        <td className="d-flex justify-content-around">
                          <Link to={`/books/${book.id}`}>
                            <i className="fs-2 mx-2 bi bi-eye text-success"></i>
                          </Link>
                          <i onClick={() => deleteHandler(book.id)}  className="fs-2 mx-2 bi bi-trash text-danger"></i>
                          <Link to={`/books/${book.id}/edit`}><i className="fs-2 mx-2 bi bi-pencil-square"></i></Link>
                        </td>
                      </tr>
                    </>
                  );
                })}      
    </tbody>
</Table>
}

    </div>
  );
}
