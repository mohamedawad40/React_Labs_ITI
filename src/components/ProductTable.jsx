import Table from 'react-bootstrap/Table';
import Swal from 'sweetalert2';

export function ProductTable({products, setProducts}) {
    const handleRemoveProduct = (index) => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedProducts = [...products];
                updatedProducts.splice(index, 1);
                setProducts(updatedProducts);
                Swal.fire(
                    'Deleted!',
                    'Your product has been deleted.',
                    'success'
                );
            } else {
                Swal.fire(
                    'Cancelled',
                    'Your product is safe :)',
                    'error'
                );
            }
        });
    };
    
  return (
    <div className="container mt-5">
     {/* {confirm && (<div className="alert alert-danger" role="alert">
        {confirm}</div>)} */}
        <Table striped bordered hover responsive="md">
    <thead className="table-dark">
        <tr>
            <th>id</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Free Shipping</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {products.length === 0 ? (
            <tr>
                <td colSpan="5" className="text-center">No products</td>
            </tr>
        ) : (
            products.map((product, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.freeShipping ? "Yes" : "No"}</td>
                    <td>
                        <button className='btn btn-danger' onClick={() => handleRemoveProduct(index)}>
                            Remove
                        </button>
                    </td>
                </tr>
            ))
        )}
    </tbody>
</Table>

    </div>
  );
}
