import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Incotex300 from '../images/Incotex-133.png'
import Incotex600 from '../images/incotex-600.png'


function prod() {
  return (
    <div className=' m-5 prod'>
        <div className='row'>
            <div data-aos="fade-up" className='col-6 d-flex justify-content-center'>
            <Card style={{ width: '25rem' }}>
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
            </div>
            <div data-aos="fade-up" className='col-6 d-flex justify-content-center'>
            <Card style={{ width: '25rem' }}>
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
            </div>
        </div>
      
    </div>
  )
}

export default prod
