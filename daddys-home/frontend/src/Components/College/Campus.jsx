import { Box, Button } from "@mui/material";

const Campus = () => {
  return (
    <Box
      width="50%"
      height="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Button variant="contained">Off Campus</Button>
      <Button variant="contained">On Campus</Button>
    </Box>
  );
};

export default Campus;
