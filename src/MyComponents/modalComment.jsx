import { useState, useEffect, useContext, useCallback } from "react";
import {Container, Row } from "react-bootstrap";
import AddComment from "./addComment";
import CommentList from "./commentList";
import { DotSpinner } from "@uiball/loaders";
import ThemeContext from "../Context/theme";


function ModalComment({ selected }) {
  const [allComment, setAllComment] = useState([]);
  const [loading, setLoading] = useState();
  const { dark } = useContext(ThemeContext);

  

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
        <div className={dark ? "bg-dark" : ""} >
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
              {!loading && 
              allComment.length === 0 ? <h3 className={dark ? "dark-mode" : ""}>Non ci sono ancora recensioni!</h3> : 
                <CommentList
                  getAllComment={getAllComment}
                  allComment={allComment}/>}
            </Row>
          </Container>
          <Container style={{ paddingTop: "10px" }}>
            <AddComment selected={selected} getAllComment={getAllComment} />
          </Container>
        </div>
     
    </>
  );
}

export default ModalComment;
