import { Box, Typography } from "@mui/material";
import desk from '../../assets/desk.svg';
import safe from '../../assets/safe.svg';
import thumbs from '../../assets/thumbs.svg';
const Perks = () => {
    return (
        <Box display="flex" flexDirection="column"> 
        <Box 
        display="flex"
        justifyContent="center"
        alignItems="center">
            
            <Typography variant="h5" gutterBottom>
                Join Our Crib
            </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" width="80vw">

        
        <Box display="flex" flexDirection="column"
        justifyContent="center"
        alignItems="center">
        <img src={desk} width={300} height={300} />
            <Typography variant="h6" mt={2}>
                Post your experiences
            </Typography>
        </Box>
        <Box display="flex" flexDirection="column"
        justifyContent="center"
        alignItems="center">
        <img src={safe} width={300} height={300} />
            <Typography variant="h6" mt={2}>
                Keeps you safe
            </Typography>
        </Box>
        <Box display="flex" flexDirection="column"
        justifyContent="center"
        alignItems="center">
        <img src={thumbs} width={300} height={300} />
            <Typography variant="h6" mt={2}>
                See ratings
            </Typography>
        </Box>
        </Box>
        </Box>

    )
}
export default Perks;
