import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import black from "../images/black.webp"

function BasicExample() {


  return (
    <div>
    <Card style={{ width: '14.5rem', display: 'flex', justifyContent: 'center', alighItems: 'center' }}>
      <Card.Img variant="top" src={black} style={{ height:'10rem'}}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text style={{fontSize: '12px'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" style={{fontSize: '10px'}}>Know More</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default BasicExample;