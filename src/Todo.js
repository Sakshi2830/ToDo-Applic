import { Button, ListItem, ListItemText } from '@material-ui/core'
import './Todo.css'
import React from 'react'
import { db } from './firebase-config'

export default function TodoListItems({todo, inprogress, id}) {

    function toggleInProgress() {
        db.collection("todos").doc(id).update({
            inprogress: !inprogress,
        })
    }

    function toDelete(){
        db.collection("todos").doc(id).delete();
    }

    return (
        <div className="showTodo" style={{display: "flex"}}>
            <ListItem >
           <ListItemText primary={todo} 
           secondary={inprogress ? "In Progress" : "Completed"} />
           </ListItem>

           <Button onClick={toggleInProgress}>{inprogress ? "Done" : "UnDone"}</Button>
           <Button onClick={toDelete}>❌</Button>
        </div>
    )
}
