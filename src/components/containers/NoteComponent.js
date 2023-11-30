import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../features/tacheReducer'

const NoteComponent = () => {
  const [showInput, setShowInput] = useState(false);
  const [newNote, setNewNote] = useState('');
  const dispatch = useDispatch();

  const addNote = () => {
    if (newNote.trim() !== '') {
      // Handle adding the note, for now, let's just log it, and stock in redux
      dispatch(actions.setNewNote(newNote))
      console.log('New Note:', newNote);
      setNewNote('');
      setShowInput(false);
    }
  };

  const cancleNote =()=>{
      setNewNote('');
      setShowInput(false);
  }

  return (
    <div >
      {!showInput ? (
        <div className='noteBox-button' onClick={() => setShowInput(true)}>Rajoute Note</div>
      ) : (
        <div className='noteBox-input'>
            <div className="multi-line-input-container">
                <textarea
                    className="multi-line-input"
                    rows="6"
                    type="text"
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="Rajouter une nouvelle note"
                    
                />
                <div className='multi-line-input-buttons'>
                    <button className='btn-cancle' onClick={cancleNote}>Cancle</button>
                    <button className='btn-add' onClick={addNote}>Add</button>
              </div>
           </div>
          
          
        </div>
      )}
    </div>
  );
};

export default NoteComponent;
