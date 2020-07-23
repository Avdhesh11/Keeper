import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [notes, setNotes] = useState([]);

  function HandleChange(event) {
    var { name, value } = event.target;
    setNote(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function HandleClick(event) {
    setNotes(prevNotes => {
      return [...prevNotes, note];
    });

    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function DeleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea
        HandleChange={HandleChange}
        HandleClick={HandleClick}
        head={note.title}
        body={note.content}
      />
      {notes.map((newNote, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={newNote.title}
            content={newNote.content}
            DeleteNote={DeleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
