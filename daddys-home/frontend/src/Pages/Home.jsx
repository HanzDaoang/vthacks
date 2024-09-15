import { Box } from "@mui/material";
import Perks from "../Components/Home/Perks";
import PropTypes from 'prop-types'; // Import PropTypes
import Chat from "../Components/Home/Chat";

const Home = ({ setID }) => {
  setID("/");

  return (
    <>
    
    <Box
      width="100%"
      height="60%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Chat />
    </Box>
    <Box
    width="100%"
    height="60%"
    display="flex"
    justifyContent="center"
    alignItems="center"
    >
      <Perks />
    </Box>
    </>
  );
};

Home.propTypes = {
  setID: PropTypes.func.isRequired, // Validate that setID is a function and is required
};

export default Home;
