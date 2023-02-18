import "./NoteList.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteNote } from "../../redux/actions/noteActions";
import styles from "./NoteList.module.css";

function NoteList() {
    const notes=useSelector((state)=> state.noteReducer.notes);
    const dispatch=useDispatch();

  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li className={styles.item}>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className={styles.notecontent}>{note.text}</p>
            <button className="btn btn-danger"
            onClick={()=> dispatch(deleteNote(index))}>Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
