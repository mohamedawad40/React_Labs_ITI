import axios from "axios"

const baseURL = 'http://localhost:3005/books'

const getAllBooks = () => axios.get(baseURL);

const getBookById = (bookId)=> axios.get(`${baseURL}/${bookId}`);

const addBook = (newBook) => axios.post(baseURL, newBook);
const editBook = (book,bookId) => axios.put(`${baseURL}/${bookId}` , book);

const deleteBook = (bookId) => axios.delete(`${baseURL}/${bookId}`);

export {getAllBooks , getBookById , addBook , editBook , deleteBook};