import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import HouseIcon from "@mui/icons-material/House";
import { useState, useEffect } from "react";

function Header(id) {
  const [centerTitle, setCenterTitle] = useState("");

  // useEffect to handle updating the title when the id changes
  useEffect(() => {
    console.log("id", id.id);
    if (id.id === "george-mason") {
      setCenterTitle("Housing at George Mason");
    } else if (id.id === "virginia-tech") {
      setCenterTitle("Housing at Virginia Tech");
    } else {
      setCenterTitle("Welcome"); // Default or fallback title
    }
  }, [id]); // Run this effect when the id changes

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Left side - Icon with "Daddy's Home" */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton size="large" color="inherit" href="/">
              <HouseIcon sx={{ mr: 1 }} />
            </IconButton>
            <Typography
              variant="h6"
              component="a"
              href="/"
              sx={{
                display: "flex",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Daddys Home
            </Typography>
          </Box>

          {/* Center - Title */}
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              textAlign: "center",
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
            }}
          >
            {centerTitle} {/* Dynamically rendered title based on id */}
          </Typography>

          {/* Right side - Account Name button */}
          <Button
            variant="outlined"
            sx={{
              color: "white",
              borderColor: "white",
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            Account Name
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
