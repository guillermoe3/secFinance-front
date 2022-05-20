import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import { AppBar, Container } from '@mui/material';
import Copyright from "./Copyright"
import { Link } from "react-router-dom"

const mdTheme = createTheme({
    palette: {
        primary: {
            main: '#262629',
            contrastText: '#4154FF',
        }
    }
});




function Landing({ component }) {

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute">
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}
                    >

                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            <Link to="/" style={{ textDecoration: 'none', color: "#4154FF"}}>
                                Security Finance
                </Link>
                        </Typography>

                        <Button color="inherit">
                            <Link to="/login" style={{ textDecoration: 'none', color: "#4154FF"}}>
                                Login
                </Link>
                        </Button>
                        <Button color="inherit">
                            <Link to="/register" style={{ textDecoration: 'none', color: "#4154FF"}}>
                                Register
                </Link>
                        </Button>

                    </Toolbar>
                </AppBar>
            </Box>
            <Container maxWidth="lg">
                <Box sx={{ m: 10 }}>
                    {component}
                </Box>

            </Container>

            <Copyright sx={{
                pt: 4, backgroundColor: "#262629",
                color: "#4154FF", position: "fixed", left: 0, bottom: 0, right: 0,
            }} />

        </ThemeProvider>

    )
}


export default Landing;