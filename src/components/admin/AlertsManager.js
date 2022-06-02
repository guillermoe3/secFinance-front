import { Container, Box, FormControl, InputLabel, Input, styled, FormControlLabel, Checkbox, Button, Typography, FormHelperText} from '@mui/material'
import { Link } from "react-router-dom"

const StyledInput = styled(Input)({
    width: "30vh",
    margin: "10px",
});


function AlertsManager (){
    return (
        <Container maxWidth="lg" sx={{
            marginTop: 1,
            border: "0.5px solid",
            padding: "10px",
            boxShadow: 5,
            backgroundColor: "white",
            borderColor: 'grey.200',
            borderRadius: 3,
            height: "100%",
        }}> 
        
            <Box sx={{ display: 'flex', flexDirection: 'column', m: 4 }}>

                    <Typography variant="h4" sx={{
                        fontWeight: "bold",
                        color: "#202980", m: 2
                    }}>Crear nueva Alerta</Typography>
                    Categoria Riesgo Titulo Body1 Body2
                    <Box>
                        <FormControl>
                            <InputLabel htmlFor="title"> Titulo </InputLabel>
                            <StyledInput id="title" type="text" name="title" />
                        </FormControl>
                    </Box>

                    <Box>
                        <FormControl>
                            <InputLabel htmlFor="category"> Categoria </InputLabel>
                            <StyledInput id="category" type="text" name="category" />
                        </FormControl>
                    </Box>

                    <FormControl>

                        <InputLabel htmlFor=""> Body1 </InputLabel>
                        <Input id="description" type="text" aria-describedby="description-helper" multiline={true} maxRows="10" />
                        <FormHelperText id="description-helper">Body principal de la alerta</FormHelperText>

                    </FormControl>

                    <FormControl>

                        <InputLabel htmlFor=""> Body2 </InputLabel>
                        <Input id="description" type="text" aria-describedby="description-helper" multiline={true} maxRows="10" />
                        <FormHelperText id="description-helper">Body secundario de la alerta</FormHelperText>

                    </FormControl>

 
                    <Box>
                        <Button type="submit" variant="contained" color="primary">
                            <Link to="/" style={{ textDecoration: 'none', color: "#4154FF" }}>
                                Crear
                                </Link>
                        </Button>
                    </Box>

                    </Box>
        
        
        
        </Container>
    )
}

export default AlertsManager;