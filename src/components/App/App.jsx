import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Note from "../Note/Note";
import CreateArea from "../CreateArea/CreateArea";
import Switch from "@material-ui/core/Switch";
import Weather from '../Weather/Weather';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);

  const [nightMode, setNightMode] = useState(false);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className={nightMode ? "body-dark" : "body-light"}>
      <Header mode={nightMode} />
      <h1 className="mode-name">{nightMode ? "Dark Mode" : "Light Mode"}</h1>
      <Switch
        onChange={() => setNightMode((prevValue) => !prevValue)}
        color="primary"
      />

      <CreateArea onAdd={addNote} mode={nightMode} />
      <Weather mode={nightMode}/>
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            mode={nightMode}
          />
        );
      })}
      <Footer />
      
    </div>
  );
}

export default App;
