import { Box } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Homes from "./Pages/Homes";
import Header from "./Components/Header/Header";
import College from "./Pages/College";
import { useState } from "react";

function App() {
  const [id, setID] = useState("");

  return (
    <Box height="100vh" width="100vw" overflow="auto">
      <Router>
        <Header id={id} />
        <Routes>
          <Route path="/" element={<Home setID={setID} />} />
          <Route path="/homes" element={<Homes />} />
          <Route path="/college/:id" element={<College setID={setID} />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
