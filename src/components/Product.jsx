import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Product.css'

export function Product (props) {
    let {dataobject} = props
  return (
    <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" className='watchimg' src={dataobject.image} />
      <Card.Body>
        <Card.Title >{dataobject.title}</Card.Title>
        <Card.Text className='carddesc'>
        {/* {dataobject.desc} */}
        </Card.Text>
      </Card.Body>
      <ListGroup>
        <ListGroup.Item className="list-group-item">
            <strong>Price:</strong> {dataobject.price}
        </ListGroup.Item>
        <ListGroup.Item className="list-group-item">
            <strong>Quantity:</strong> {dataobject.quantity}
        </ListGroup.Item>
</ListGroup>

      <Card.Body>
        <button className='btn btn-primary '>Buy Now</button>
      </Card.Body>
    </Card>
  );
}

