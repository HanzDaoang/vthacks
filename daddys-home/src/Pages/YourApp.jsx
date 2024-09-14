import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Route, Routes, Link} from "react-router-dom";
import Home from "./Home";
import Homes from "./Homes";

import { withAuthInfo, useRedirectFunctions, useLogoutFunction } from '@propelauth/react'

const YourApp = withAuthInfo((props) => {
    const logoutFunction = useLogoutFunction()
    const { redirectToLoginPage, redirectToSignupPage, redirectToAccountPage } = useRedirectFunctions()

    return (
        <Box height="100vh" width="100vw" overflow="auto" sx={{ backgroundColor: '#ffffff' }} >
        <Box height="20vh" width="50vw">
            <Button component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/homes">Homes</Button>
            {
            props.isLoggedIn ? (
                <>
                    <p>Email: {props.user.email}</p>
                    <Button color="inherit" onClick={() => logoutFunction(true)}>Logout</Button>
                </>
            ) : (
                <>
                    <Button color="inherit" onClick={() => redirectToLoginPage()}>Login</Button>
                    <Button color="inherit" onClick={() => redirectToSignupPage()}>Signup</Button>
                </>
            )
        } 

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/homes" element={<Homes />} />
            </Routes>
        </Box>
  
        </Box>
    )
})

export default YourApp
