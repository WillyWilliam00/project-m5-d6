import { useState, useEffect, useContext, useCallback } from "react";
import { Button, Modal, Container, Row, CloseButton } from "react-bootstrap";
import AddComment from "./addComment";
import CommentList from "./commentList";
import { DotSpinner } from "@uiball/loaders";
import ThemeContext from "../Context/theme";
import { MoonFill, BrightnessHighFill } from "react-bootstrap-icons";

function ModalComment({ selected, setSelected }) {
  const [allComment, setAllComment] = useState([]);
  const [loading, setLoading] = useState();
  const { dark, setDark } = useContext(ThemeContext);
  console.log(selected)

  const getAllComment = useCallback(() => {
    setLoading(true);
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${selected}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM3YWIzZmU3NDZhMDAwMTQ4MTQzMmEiLCJpYXQiOjE2OTg2ODI5NTQsImV4cCI6MTY5OTg5MjU1NH0.HHBtM4-HlPu0aYhgFK4ucJa0J5WmqpZZFSS5KULk3xo",
      },
    })
      .then((r) => r.json())
      .then(setAllComment)
      .catch(() => alert("oh oh"))
      .finally(() => setLoading(false));
  }, [selected]);

  useEffect(() => {
    getAllComment();
  }, [getAllComment]);

  return (
    <>
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header className={dark ? "bg-dark" : ""}>
          
          <Button
            className="me-5"
            style={{padding: "3px 10px 5px 10px"}}
            variant={dark ? "primary" : "secondary"}
            onClick={() => setDark(!dark)}
          >
          
            {dark ? <BrightnessHighFill style={{color: "yellow"}} /> : <MoonFill />}
          </Button>
          
          <Modal.Title className={dark ? "dark-mode" : ""}>
            Recensioni
          </Modal.Title>
          <CloseButton onClick={() => {setSelected("")}}/>
        </Modal.Header>
        
        <Modal.Body className={dark ? "bg-dark" : ""}>
          <Container style={{ borderBottom: "2px solid lightgrey" }}>
            <Row style={{ height: 400, overflow: "auto" }}>
              {loading && (
                <DotSpinner
                  className="spinner"
                  size={40}
                  speed={0.9}
                  color="black"
                />
              )}
              {!loading && (
                <CommentList
                  getAllComment={getAllComment}
                  allComment={allComment}
                />
              )}
            </Row>
          </Container>
          <Container style={{ paddingTop: "10px" }}>
            <AddComment selected={selected} getAllComment={getAllComment} />
          </Container>
        </Modal.Body>
      </Modal.Dialog>
      </div>
    </>
  );
}

export default ModalComment;
