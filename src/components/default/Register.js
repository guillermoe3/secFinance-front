import { Container, Input, Button, Box, Grid, Typography, FormControl, InputLabel} from '@mui/material'
import {Link} from "react-router-dom"
import { styled } from "@mui/system";

//sx={{m: 2, width: "30vw"}}

const StyledInput = styled(Input)({
    width: "30vh", 
    margin: "10px",
});

function Register (){
    return(
        <Container maxWidth="md" sx={{maxHeight: "100%", }}>
        <Typography align="center" variant="h5">Register</Typography>
        
        <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            sx={{marginTop: "10vh", width: "100%"}}
            
            
        >
                
                <Box>
                <FormControl>
                    <InputLabel htmlFor="firstname"> Nombre </InputLabel>
                     <StyledInput id="firstname" type="text" name="firstname"/>
                     </FormControl>
                </Box>
                
                <Box>
                <FormControl>
                    <InputLabel htmlFor="lastname"> Apellido </InputLabel>
                     <StyledInput id="lastname" type="text" name="lastname" />
                     </FormControl>
                </Box>
                
                <Box>
                <FormControl>
                    <InputLabel htmlFor="email"> Email </InputLabel>
                     <StyledInput id="email" type="email" name="email" />
                     </FormControl>
                </Box>

                <Box>
                <FormControl>
                     <InputLabel htmlFor="password"> Password </InputLabel>
                    <StyledInput id="password" type="password" name="password" /> 
                    </FormControl></Box>
                    <Box>
                <FormControl>
                     <InputLabel htmlFor="password"> Reingrese password </InputLabel>
                    <StyledInput id="password" type="password" name="password" /> 
                    </FormControl></Box>
                <Box sx={{m: 5}}>
                    <Button type="submit" variant="contained" color="primary">
                    <Link to="/home" style={{ textDecoration: 'none', color: "#4154FF"}}>
                         Registrarse!
                         </Link>
                         </Button>
                </Box>
                
            
        </Grid>

    </Container>
    )
}

export default Register;