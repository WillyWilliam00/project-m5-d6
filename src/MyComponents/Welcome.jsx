import { useContext } from "react";
import {Row, Col, Container} from "react-bootstrap";
import ThemeContext from "../Context/theme";


function Jumbotron() {
    const {dark} = useContext(ThemeContext)
    console.log(dark)
    
    return (
        <Container>
            
                <div className="jumbotron">
                    <h1 className={`display-4 fw-bolder ${dark ? "dark-mode" : ""}`}>EPICBOOKS</h1>
                    <p className={`lead ${dark ? "dark-mode" : ""}`}>Esplora mondi infiniti tra le pagine di un libro...</p>
                    
                    <Row className='d-flex justify-content-center'>
                        <Col xs={12 }sm={6}>
                        <img
                            alt="book"
                            src="https://images.pexels.com/photos/2203051/pexels-photo-2203051.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            className="d-inline-block align-top jumbo-img rounded-4"
                        />
                        </Col>
                        <Col xs={12}sm={6} className='d-flex align-items-end'>
                        <p className={`lead ${dark ? "dark-mode" : ""}`}>In un mondo dove ogni pagina è una porta segreta verso mondi straordinari, 
                            il nostro ecommerce di libri ti offre un viaggio senza fine tra storie coinvolgenti, 
                            saggi illuminanti e avventure epiche. Benvenuto a bordo, esplora e trova 
                            il tuo prossimo grande libro con noi...</p>
                        </Col>
                        
                    </Row>
                </div>

            
        </Container>
    )
}

export default Jumbotron