import { Row, Container, Col } from "react-bootstrap";
import { useState } from "react";
import fantasy from "../books/fantasy.json"
import SingleBook from "./SingleBook";
import ModalComment from "./modalComment"


export default function TableBook({ name }) {
    const usingQuery = book => book.title.toLowerCase().includes(name.toLowerCase())
    const [selected, setSelected] = useState("")
    const [titolo, setTitolo] = useState("")


    return (

        <Container className="my-5">

            <Row>
                <Col xs={8}>
                    <Row className="row-gap-5">
                        {fantasy.filter(usingQuery).map(book => (
                            <SingleBook img={book.img} setTitolo={setTitolo} title={book.title} key={book.asin} asin={book.asin} selected={selected} setSelected={setSelected} />
                        ))}

                    </Row>
                </Col>
                {!!selected &&  <Col xs={4} className="position-sticky" style={{height: 500, top: 76}} >
                    <h2>Recensioni di</h2>
                    <p>{titolo} </p>
                    <ModalComment selected={selected} setSelected={setSelected}/>
                </Col>}


            </Row>

        </Container>



    );

}

