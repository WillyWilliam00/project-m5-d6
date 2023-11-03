import { useContext, useState } from 'react';
import {Button, Form} from 'react-bootstrap';
import ThemeContext from '../Context/theme';



function AddComment({selected, getAllComment}) {

    const [text, setText] = useState("")
    const [rate, setRate] = useState("")
    const {dark} = useContext(ThemeContext)

    // function GetComment(){
    //   setLoading(true)
    //   fetch(`https://striveschool-api.herokuapp.com/api/comments/${selected}`, {
    //   headers: {
    //     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM3YWIzZmU3NDZhMDAwMTQ4MTQzMmEiLCJpYXQiOjE2OTg2ODI5NTQsImV4cCI6MTY5OTg5MjU1NH0.HHBtM4-HlPu0aYhgFK4ucJa0J5WmqpZZFSS5KULk3xo"
    //   }})
    //   .then(r => r.json())
    //   .then(setAllComment)
    //   .catch(()=>alert("oh oh"))
    //   .finally(()=>setLoading(false))     
    // }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = {
            comment: text,
            rate: rate,
            elementId: selected
        }

        fetch("https://striveschool-api.herokuapp.com/api/comments/", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM3YWIzZmU3NDZhMDAwMTQ4MTQzMmEiLCJpYXQiOjE2OTg2ODI5NTQsImV4cCI6MTY5OTg5MjU1NH0.HHBtM4-HlPu0aYhgFK4ucJa0J5WmqpZZFSS5KULk3xo"
              },
              method: "POST",
              body: JSON.stringify(form),
            }).then(
                (response) => {
                    if (response.ok){
                        alert("Salvato!")
                        getAllComment()              
                    } else {
                        alert("oh oh")
                    }
                }
            )
    }


  return (
    <Form onSubmit={handleSubmit}>
      <h4 className={dark ? "dark-mode" : ""}>Inserisci una recensione!</h4>
      <Form.Group className="mb-3 mt-2" controlId="text">
        <Form.Label className={dark ? "dark-mode" : ""}>Cosa ne pensi?</Form.Label>
        <Form.Control type="text" placeholder="Scrivi la tua recensione" required value={text} onChange={(e)=> setText(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="stars">
        <Form.Label className={dark ? "dark-mode" : ""} >Quanto ti è piaciuto?</Form.Label>
        <Form.Control type="number" min="1" max="5" required value={rate} onChange={(e)=> setRate(e.target.value)}/>
      </Form.Group>
      <div className='d-flex justify-content-center align-items-center'>
        <Button variant="success" type="submit" >
          Invia la tua recensione!
        </Button>
      </div>
    </Form>
  );
}

export default AddComment;