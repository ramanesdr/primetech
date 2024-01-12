import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Incotex300 from '../images/Incotex-133.png'
import Incotex600 from '../images/incotex-600.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Certif from '../images/certf.jpg'


function prod() {
  return (
    <Container className='m-5 prod'>
        <Row>
            <Col sm={12} md={6} data-aos="fade-up">
            
            <Card className='car' style={{ width: '25rem' }}>
              
      <Card.Img className=' cardImg' variant="top" src={Incotex300} alt=''/>
      <Card.Body>
        <Card.Title>Incotex 133</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col sm={12} md={6} data-aos="fade-up">
          
            <Card className='car' style={{ width: '25rem' }}>
             
      <Card.Img className=' cardImg' variant="top" src={Incotex600} alt=''/>
      <Card.Body>
        <Card.Title>Incotex 600 MCF</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
            </Col>
        </Row>
      
    </Container>
  )
}

export default prod
