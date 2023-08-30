import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router";
import Grid from '@mui/material/Grid';
function App() {
  return (
    <div className="App">
      <Grid item xs={8} container>
      <Navbar />
      <Outlet />
    </Grid>
    </div>
  );
}

export default App;
