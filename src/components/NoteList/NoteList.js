import "./NoteList.css";

function NoteList() {
    const notes=[{text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam'
    , createdOn: new Date()},
    {text:'Aliquam erat volutpat. Ut tincidunt, velit vel aliquam commodo, tellus urna auctor tortor, non ultrices libero ante sed magna.'
    , createdOn: new Date()},
];
  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className="note-content">{note.text}</p>
            <button className="btn btn-danger">Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
