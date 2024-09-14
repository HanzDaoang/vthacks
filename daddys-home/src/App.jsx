import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Route, Routes, Link} from "react-router-dom";
import Home from "./Pages/Home";
import Homes from "./Pages/Homes";

import { withAuthInfo, useRedirectFunctions, useLogoutFunction } from '@propelauth/react'

const App = withAuthInfo((props) => {

    const logoutFunction = useLogoutFunction()
    const { redirectToLoginPage, redirectToSignupPage, redirectToAccountPage } = useRedirectFunctions()

    return (
        <Box height="100vh" width="100vw" overflow="auto" sx={{ backgroundColor: '#ffffff' }} >
            <Button component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/homes">Homes</Button>

            {
                props.isLoggedIn ? (
                    <>
                        <p>Email: {props.user.email}</p>
                        <p>Access Token: {props.accessToken}</p>
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
            {/* <Route path="/auth" element={<Login />} /> */}
            </Routes>
  
      </Box>
    )
})

export default App
