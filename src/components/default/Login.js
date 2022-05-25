import { Container, Input, Button, Box, Grid, Typography, FormControl, InputLabel, Checkbox, FormControlLabel} from '@mui/material'
import { Link } from "react-router-dom"

function Login() {
    return (

        <Container maxWidth="md" sx={{ maxHeight: "100%", }}>
            <Typography align="center" variant="h5">Login</Typography>

            <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
                sx={{ marginTop: "7vh" }}

            >

                <Box sx={{ m: 2 }}>
                    <FormControl>
                        <InputLabel htmlFor="user"> Usuario </InputLabel>
                        <Input id="user" type="text" name="user" />
                    </FormControl>
                </Box>

                <Box>
                    <FormControl>
                        <InputLabel htmlFor="password"> Password </InputLabel>
                        <Input id="password" type="password" name="password" />
                    </FormControl></Box>


                 <FormControlLabel control={<Checkbox defaultChecked />} label="Recordarme" />
                 
                <Box sx={{ m: 5 }}>
                    <Button type="submit" variant="contained" color="primary">
                        <Link to="/home" style={{ textDecoration: 'none', color: "#4154FF" }}>
                            Ingresar
                             </Link>
                    </Button>
                </Box>


            </Grid>

        </Container>
    )
}

export default Login;