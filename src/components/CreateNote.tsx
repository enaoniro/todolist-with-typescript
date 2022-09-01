import * as React from 'react';
import { Button, Card, CardGroup, Container, Alert, Form } from 'react-bootstrap';
import Note from "../models/note.model"

interface ICreateNotesrops {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>

}

const CreateNotes: React.FunctionComponent<ICreateNotesrops> = ({notes, setNotes}) => {
    const [error, setError ] = React.useState<string>("");
    const titleRef = React.useRef<HTMLInputElement | null>(null);
    const textRef = React.useRef<HTMLTextAreaElement | null>(null);
    const colorRef = React.useRef<HTMLInputElement | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (titleRef.current?.value === "" || textRef.current?.value === "") {
            return setError("All FIELDS ARE MANDATORY!");
         }
         setError("");
         setNotes([...notes, {
            id: (new Date()).toString(),
            title: (titleRef.current as HTMLInputElement).value,
            text: (textRef.current as HTMLTextAreaElement).value,
            color: (colorRef.current as HTMLInputElement).value,
            date: (new Date()).toString()
         }]);

         (titleRef.current as HTMLInputElement).value = "";
         (textRef.current as HTMLTextAreaElement).value = "";


    }

  return (
    <>
       <h2 className='mt-3'>add new note</h2>
       {error && <Alert variant='danger'>{error}</Alert>}
       <Form className="mt-3 mb-3" onSubmit={(e) => handleSubmit(e)}>
          <Form.Group>
             <Form.Label className='mb-3 controlId="formBasicTitle'>title</Form.Label>
             <Form.Control placeholder='Enter  title for the note' type='text' ref={ titleRef }/>
          </Form.Group>
          <Form.Group>
             <Form.Label className='mb-3 controlId="formBasicText'>text</Form.Label>
             <Form.Control placeholder='Enter text for the note' rows={3} as='textarea' ref={ textRef }/>
          </Form.Group>
          <Form.Group className='mb-3'>
             <Form.Label htmlFor='colorInput'>Notes Color</Form.Label>
             <Form.Control id='colorInput' type='color' defaultValue="#dfdfdf" title="choose color" ref={ colorRef }/>
          </Form.Group>
          <Button type="submit" variant='primary'>Submit</Button>
        
       </Form>
    </>

  );
};

export default CreateNotes
