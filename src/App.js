
import { Button, TextField } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import { db } from "./firebase-config"
import firebase from "firebase"
import TodoListItems from './Todo';



function App() {
const [todoInput, setTodoInput] = useState('');
const [todos, setTodos] = useState([]);

useEffect(() => {
  getTodos();
}, [])//blank for run only in first launch

function getTodos() {
  db.collection("todos").onSnapshot(function (querySnapshot) {
    
    setTodos(
      querySnapshot.docs.map((doc) => ({
        id: doc.id,
        todo: doc.data().todo,
        inprogress: doc.data().inprogress,
      }))
    );     
  })
}

function addTodo(e) {
  e.preventDefault();
//for avoiding blamk input
  if(todoInput === ""){
    setTodoInput([...todos,todoInput]);
    setTodoInput("");
    console.log("nothin is there ");
  }
else{
  console.log(`your adding a todo`);
  db.collection("todos").add({
    inprogress: true,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    todo: todoInput,
  
  })
  setTodoInput("");
}}


  return (
    <div className="App"  style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
     <div>
     <h1 className="titlee" style={{
       textAlign: "center",
    }}> 📝 Let's Do It 📝</h1>
     <form>
     <TextField id="standard-basic" label="Step forward by doing this🎯"
     value={todoInput} 
     onChange={(e) => setTodoInput(e.target.value)}
     style={{
       maxWidth: "300px",
       width: "90vw",
       
       
     }}/>
<Button type="submit" variant="contained" onClick={addTodo}>Add</Button>
</form>

{todos.map((todo) =>(
 <TodoListItems todo={todo.todo} inprogress={todo.inprogress} id={todo.id} />
 
))}
     </div>
    </div>
  );
}

export default App;
