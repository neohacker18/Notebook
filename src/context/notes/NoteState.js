import NoteContext from "./noteContext";
import { useState} from "react";

const NoteState =(props)=>{
    const notesInitial=[
        {
          "_id": "6293aa1c283feec8e2a34601",
          "user": "6293a9e1283feec8e2a345ff",
          "title": "my title1",
          "description": "aryansethu11",
          "tag": "personal",
          "date": "2022-05-29T17:15:08.105Z",
          "__v": 0
        },
        {
          "_id": "6293aa1c283feec8e2a34601",
          "user": "6293a9e1283feec8e2a345ff",
          "title": "my title1",
          "description": "aryansethu11",
          "tag": "personal",
          "date": "2022-05-29T17:15:08.105Z",
          "__v": 0
        },
        {
          "_id": "6293aa1c283feec8e2a34601",
          "user": "6293a9e1283feec8e2a345ff",
          "title": "my title1",
          "description": "aryansethu11",
          "tag": "personal",
          "date": "2022-05-29T17:15:08.105Z",
          "__v": 0
        },
        {
          "_id": "6293aa1c283feec8e2a34601",
          "user": "6293a9e1283feec8e2a345ff",
          "title": "my title1",
          "description": "aryansethu11",
          "tag": "personal",
          "date": "2022-05-29T17:15:08.105Z",
          "__v": 0
        },
        {
          "_id": "6293aa1c283feec8e2a34601",
          "user": "6293a9e1283feec8e2a345ff",
          "title": "my title1",
          "description": "aryansethu11",
          "tag": "personal",
          "date": "2022-05-29T17:15:08.105Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState