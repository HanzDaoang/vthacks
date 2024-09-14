import { Box } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Homes from "./Pages/Homes";
import Login from './Pages/Login'


function App() {
  return (
    <Box height="100vh" width="100vw" overflow="auto">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homes" element={<Homes />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
