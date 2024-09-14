import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Route, Routes, Link} from "react-router-dom";
import Home from "./Pages/Home";
import Homes from "./Pages/Homes";
import Login from './Pages/Login'


function App() {
  return (
    // The box is similar to a div
    <Box height="100vh" width="100vw" overflow="auto" sx={{ backgroundColor: '#ffffff' }} >

      {/* Navigation Bar
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/homes">Homes</Button>
          <Button color="inherit" component={Link} to="/login">Login</Button>
        </Toolbar>
      </AppBar> */}
      <Button component={Link} to="/">Home</Button>
      <Button color="inherit" component={Link} to="/homes">Homes</Button>
      <Button color="inherit" component={Link} to="/login">Login</Button>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homes" element={<Homes />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </Box>
  );
}

export default App;
