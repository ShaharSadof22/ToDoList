import React, { useState } from "react";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import './CreateArea.css';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [changeAnimation, setChangeAnimation] = useState({
    rowsNumber: 1,
    zoomText: false,
    zoomAdd: false
  })

  function changeanimation(){
    setChangeAnimation({
      rowsNumber: 3,
      zoomText: true,
      zoomAdd: true
    })

  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div className="creat-note">
      <form className={props.mode ? "create-note-dark" : "create-note-light"}>
        <Zoom in={true} timeout={500}>
          <input
            name="title"
            onChange={handleChange}
            onClick={changeanimation}
            value={note.title}
            placeholder="Title"
          />
        </Zoom>
        <Zoom in={changeAnimation.zoomText} timeout={1000}>
          <textarea
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="What is the plan?"
            rows={changeAnimation.rowsNumber}
          />
        </Zoom>
        <Zoom in={changeAnimation.zoomAdd} timeout={1000}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
