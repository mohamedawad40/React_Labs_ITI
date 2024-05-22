import './Product.css'
import { useState } from 'react';
import { Link, useLoaderData } from "react-router-dom";


export function Product () {
  const { data } = useLoaderData();
  console.log(data)
  let [books] = useState(data);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books &&
          books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.price}</td>
              <td className="d-flex justify-content-around">
                <Link to={`/books/${book.id}`}>
                  <i className="fs-2 mx-2 bi bi-eye text-success"></i>
                </Link>
                <i
                  
                  className="fs-2 mx-2 bi bi-trash text-danger"
                ></i>
                <Link to={`/books/${book.id}/edit`}>
                  <i className="fs-2 mx-2 bi bi-pencil-square"></i>
                </Link>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}