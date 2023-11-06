import { Row, Container, Col, Button, CloseButton } from "react-bootstrap";
import { useState, useContext } from "react";
import { MoonFill, BrightnessHighFill } from "react-bootstrap-icons";
import fantasy from "../books/fantasy.json"
import SingleBook from "./SingleBook";
import ModalComment from "./modalComment"
import ThemeContext from "../Context/theme";


export default function TableBook({ name }) {
    const usingQuery = book => book.title.toLowerCase().includes(name.toLowerCase())
    const [selected, setSelected] = useState("")
    const [titolo, setTitolo] = useState("")
    const { dark, setDark } = useContext(ThemeContext);

    return (

        <Container className="my-5">

            <Row>
                <Col>
                    <Row className="row-gap-5">
                        {fantasy.filter(usingQuery).map(book => (
                            <SingleBook img={book.img} setTitolo={setTitolo} title={book.title} key={book.asin} asin={book.asin} selected={selected} setSelected={setSelected} />
                        ))}

                    </Row>
                </Col>
                {!!selected && <Col xs={4} className="position-sticky" style={{ height: 500, top: 76, overflow: "auto"}} >
                    <div className="d-flex justify-content-end align-items-center">
                        <Button
                        style={{ padding: "3px 7px 5px 8px" }}
                        variant={dark ? "primary" : "secondary"}
                        onClick={() => setDark(!dark)}
                        className="me-3" >
                        
                        {dark ? <BrightnessHighFill style={{ color: "yellow" }} /> : <MoonFill />}
                        
                    </Button>
                    <CloseButton variant={dark ? "white" : ""} onClick={() => {setSelected("")}}/>
                    </div>
                    <h2 className={dark ? "dark-mode" : ""}>Recensioni di</h2>
                    <p className={dark ? "dark-mode" : ""}>{titolo} </p>
                    <ModalComment selected={selected} setSelected={setSelected} />
                </Col>}


            </Row>

        </Container>



    );

}

