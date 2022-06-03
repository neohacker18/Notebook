import React,{useContext,useState} from 'react'
import notecontext from "../context/notes/noteContext";

const AddNote = (props) => {
    const context = useContext(notecontext);
    const {addNote} = context;
    const [note, setNote] = useState({title:"",description:"",tag:"default"})
    const handleClick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setNote({title:"",description:"",tag:""})
        props.showAlert("Added Successfully","success");
    }

    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
  return (
    <div>
          <div className="container my-4">
        <h2>Add a Note</h2>
        <form>
          <div className="form-group">
            <label htmlFor="title" >Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={note.title}
              aria-describedby="emailHelp"
              onChange={onChange}
              />
          </div>
          <div className="form-group">
            <label htmlFor="description" >Description</label>
            <input
              type="text"
              className="form-control"
              value={note.description}
              id="description"
              name="description"
              onChange={onChange}
              />
          </div>
          <div className="form-group">
            <label htmlFor="tag" >Tag</label>
            <input
              type="text"
              className="form-control"
              value={note.tag}
              id="tag"
              name="tag"
              onChange={onChange}
            />
          </div>
          <button disabled={note.title.length<1 || note.description.length<3} type="submit" className="btn btn-primary my-4" onClick={handleClick}>
            Add Note
          </button>
        </form>
    </div>
    </div>
  )
}

export default AddNote