import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
function App() {
  return (
    <div className="App">
      <Button variant="contained" color={"secondary"} startIcon={<DeleteIcon />}>Hello world</Button>
    </div>
  );
}

export default App;
