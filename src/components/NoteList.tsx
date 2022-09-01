import * as React from 'react';
import { JsxElement } from 'typescript';
import  Note  from "../models/note.model"
import Notes  from './Notes';

interface INoteListProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>

}

const NoteList: React.FunctionComponent<INoteListProps> = ({notes, setNotes }) => {
  const deleteNote = (id: string) => {
    setNotes(notes.filter(note=>note.id !== id)) 
  }
  const renderNotes = () => {
    return notes.map(note => {
        return <Notes key={note.id} note={ note } deleteNote={ deleteNote }/>
    })

  }
    return (
    <>
     <h2 className='mt-3'>
        notes
     </h2>
        <div>{ renderNotes() }</div>
        <div></div>
    </>
  ) ;
};

export default NoteList;
