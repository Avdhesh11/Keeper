import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            placeholder="Title"
            onChange={props.HandleChange}
            value={props.head}
          />
        )}
        <textarea
          name="content"
          onClick={expand}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          onChange={props.HandleChange}
          value={props.body}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={props.HandleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
