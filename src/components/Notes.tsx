import * as React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Note } from "../models/note.model"

interface INotesProps {
    note: Note,
    deleteNote: (id:string) => void
}

const Notes: React.FunctionComponent<INotesProps> = ({note, deleteNote}) => {



  return (
    <div className='mb-1'>
        <Card style={{backgroundColor:note.color}}>
            <Card.Body>
                <Card.Title className='p-1'>{note.title}</Card.Title><hr className='text-danger'></hr>
                <Card.Text className='ms-5'>{note.text}</Card.Text>
                <Card.Subtitle className=' ms-5'>{note.date}</Card.Subtitle>
                <Button className='btn-danger mt-3' onClick={()=>deleteNote(note.id)}> delete</Button>
            </Card.Body>

        </Card>
    </div>
  ) ;
};

export default Notes;
