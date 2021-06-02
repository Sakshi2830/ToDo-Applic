
import { TextField } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <div className="App"  style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
     <div>
     <h1>TODO App 📝</h1>
     <TextField id="standard-basic" label="What to do" 
     style={{
       maxWidth: "300px",
       width: "90vw",
       
     }}/>
     </div>
    </div>
  );
}

export default App;
