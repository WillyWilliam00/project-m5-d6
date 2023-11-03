import {Row, Col, Container} from "react-bootstrap";



function Footer() {
  return (
    <Container fluid className='bg-dark text-light mt-5'>
      <Row className='d-flex justify-content-center pt-5'>
        <Col xs={12} sm={4}>
          <div className='footer-div'>
              <h4>Contatti</h4>
                <p>Indirizzo: Via Example, 12345, Città</p>
                <p>Email: info@example.com</p>
                <p>Telefono: +39 0123 456789</p>
          </div>  
        </Col>
        <Col xs={12} sm={4}>
          <div className='footer-div'>
           <h4>Link Utili</h4>
              <ul className="list-unstyled">
                  <li>Home</li>
                  <li>Chi siamo</li>
                  <li>Servizi</li>
                  <li>Contatti</li>
               </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
