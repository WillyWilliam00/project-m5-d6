import {Col, Card} from "react-bootstrap";
import { useContext } from "react";
import ThemeContext from "../Context/theme";


export default function SingleBook({img, title, asin, selected, setSelected, setTitolo}) {

  
  
    const {dark} = useContext(ThemeContext)
  

    // selected !== asin ? setSelected(asin) : setSelected("")

    return (
        
        <Col xs={12} sm={6} lg={3}>
        <Card className={selected !== asin ? "border border-0" : "select border border-0"}>
            <Card.Img  
               style={{cursor: "pointer"}} variant="top" 
               src={img} 
               onClick={() => {
                if(selected !== asin){
                    setTitolo(title);
                    setSelected(asin)
                } else {
                    setTitolo("");
                    setSelected("")
                }
                
                
                
                selected !== asin ? setTitolo(title) : setTitolo(""); selected !== asin ? setSelected(asin) : setSelected("")}} 
               className="img-fluid"
           />
           
            <Card.Body className={dark ? "bg-success-subtle" : "bg-info-subtle"}>
                <Card.Title>{title}</Card.Title>                   
            </Card.Body>
             
        </Card>
    </Col>
    
       
    )
}

