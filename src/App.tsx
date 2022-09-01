import React, { useState } from 'react';
import './App.css';
import { Note } from "./models/note.model"
import  Header from "./components/Header"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col  } from 'react-bootstrap';
import NoteList from "./components/NoteList"
import CreateNotes from './components/CreateNote';

function App() {
const [ notes, setNotes ] = useState<Note[]>([{
  id: (new Date).toString(),
  title: "Meetings",
  text: "Schedule meeting with UI/UX Team",
  color: "#dfdfdf",
  date: (new Date).toString()

}]);

  return (
    <>
     <Header />
     <Container>
        <Row>
          <Col>
           <NoteList notes={ notes } setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
           <CreateNotes notes={ notes } setNotes={setNotes} />
          </Col>
        </Row>
     </Container>
    </>
  );
}

export default App;
