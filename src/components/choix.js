import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';


function choix() {
    const cardStyle = {
        background: '#007aff', 
        with: '20rem',
        color: 'white'
      };
  return (
    <>
      <h1>Pourquoi nous choisir</h1>
      <span style={{fontSize:'100px'}}>&#129300;</span>
      <Container className='  cont'>
      <Row className='m-5'>
      <Col sm={12} md={6} lg={4}>
      <Card data-aos="fade-up"
     data-aos-duration="3000"
          style={cardStyle}
          className="carb mb-2"
        >
          <Card.Header><i class="fa-solid fa-user-tie iconcard"></i></Card.Header>
          <Card.Body>
            <Card.Title> Soyez professionnel </Card.Title>
            <Card.Text>
              En delivrant les factures certifiées, vousetes encore plus professionnel
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
            <Card data-aos="fade-up"
     data-aos-duration="2000"
          style={cardStyle}
          className="carb mb-2"
        >
          <Card.Header><i class="fa-regular fa-handshake iconcard"></i></Card.Header>
          <Card.Body>
            <Card.Title> Inspirez la confiance </Card.Title>
            <Card.Text>
              En delivrant les factures certifiées, vous inspirez la confiance à vos partenaires
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={6} lg={4}>
            <Card
            data-aos="fade-up"
            data-aos-duration="1000"
          style={cardStyle}
          className="carb mb-2"
        >
          <Card.Header><i class="fa-solid fa-check iconcard"></i></Card.Header>
          <Card.Body>
            <Card.Title> Soyez authentique </Card.Title>
            <Card.Text>
              En delivrant les factures certifiées, vous imposez votre présence
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
        </Row>
      </Container>
    </>
  )
}

export default choix
