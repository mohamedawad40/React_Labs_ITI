import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function ProductForm({products, setProducts}) {
    let [ formData, setFormData ] = useState( {
        name: '',
        price: '',
        freeShipping: false,
    } );

    let [error, setError] = useState('');


    const changeHandler = ( e ) => {
        setFormData( {
            ...formData,
            [ e.target.name ]: e.target.value
        } );
        setError('');
    }

    const submitHandler = ( e ) => {
        e.preventDefault()
        if (formData.name.length <= 3) {
            setError("Product name must be more than 3 characters.");
            return;
        }

        if (formData.price <= 10) {
            setError('Price must be greater than 10.');
            return;
        }
        setProducts( [ ...products, formData ] )
        setFormData( {
            name: '',
            price: '',
            freeShipping: false,
        } )
    }
  return (
    <div className='container mt-5'>
      <Form className="p-4 shadow bg-light rounded" onSubmit={submitHandler}>
        <h2 className="mb-4">Product Form</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="Product Name" name='name'
            onChange={changeHandler} value={formData.name}
          />  
        </Form.Group>
    
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Price" name='price'
            onChange={changeHandler} value={formData.price}
          />
        </Form.Group>
        {error && (<div className="alert alert-danger" role="alert">
        {error}</div>)}

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Free shipping"
          onChange={changeHandler}  name="freeShipping"
          checked={formData.freeShipping}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Product 
        </Button>
      </Form>
    </div>
  );
}
