import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Route, Routes, Link} from "react-router-dom";
import Home from "./Home";
import Homes from "./Homes";

import { withAuthInfo, useRedirectFunctions, useLogoutFunction } from '@propelauth/react'

const YourApp = withAuthInfo((props) => {
    const logoutFunction = useLogoutFunction()
    const { redirectToLoginPage, redirectToSignupPage, redirectToAccountPage } = useRedirectFunctions()

    // if (props.isLoggedIn) {
    //     return (
    //         <div>
    //             <p>You are logged in as {props.user.email}</p>
    //             <button onClick={() => redirectToAccountPage()}>Account</button>
    //             <button onClick={() => logoutFunction(true)}>Logout</button>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div>
    //             <p>You are not logged in</p>
    //             <button onClick={() => redirectToLoginPage()}>Login</button>
    //             <button onClick={() => redirectToSignupPage()}>Signup</button>
    //         </div>
    //     )
    // }

    return (
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
          {/* <Route path="/auth" element={<Login />} /> */}
        </Routes>
  
      </Box>
    )
})

export default YourApp
