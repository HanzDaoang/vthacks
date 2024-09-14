import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Autocomplete, TextField, Box } from "@mui/material";

// List of colleges (You can replace this with your dynamic list)
const colleges = ["George Mason University", "Virginia Tech"];

const School = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  
  const handleCollegeSelect = (event, newValue) => {
    if (newValue) {
      // Navigate to the selected college's URL
      if (newValue === "George Mason University") {
        navigate(`/college/george-mason`);
      } else {
        navigate(`/college/virginia-tech`);
      }
    }
  };

  const handleKeyPress = (event) => {
    console.log("inputValue", inputValue);
    if (event.key === "Enter" && inputValue) {
      if (inputValue === "George Mason University") {
        navigate(`/college/george-mason`);
      } else {
        navigate(`/college/virginia-tech`);
      }
    }
  };

  return (
    <Box width="50%">
      <Autocomplete
        freeSolo
        options={colleges}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
        onChange={handleCollegeSelect} // Trigger on college selection
        fullWidth
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Colleges"
            variant="outlined"
            onKeyPress={handleKeyPress} // Trigger on enter key
          />
        )}
      />
    </Box>
  );
};

export default School;
