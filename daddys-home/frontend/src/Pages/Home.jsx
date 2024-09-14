import { Box } from "@mui/material";
import School from "../Components/Home/School";
import PropTypes from 'prop-types'; // Import PropTypes

const Home = ({ setID }) => {
  setID("/");

  return (
    <Box
      width="100%"
      height="60%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <School />
    </Box>
  );
};

Home.propTypes = {
  setID: PropTypes.func.isRequired, // Validate that setID is a function and is required
};

export default Home;
