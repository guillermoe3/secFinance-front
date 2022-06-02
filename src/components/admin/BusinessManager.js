import { Container, Box, FormControl, InputLabel, Input, styled, FormControlLabel, Checkbox, Button, Typography } from '@mui/material'
import { Link } from "react-router-dom"

const StyledInput = styled(Input)({
    width: "30vh",
    margin: "10px",
});

function BusinessManager() {
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

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', m: 4 }}>

                <Typography variant="h4" sx={{
                    fontWeight: "bold",
                    color: "#202980", m: 2
                }}>Crear nueva Empresa</Typography>
                <Box>
                    <FormControl>
                        <InputLabel htmlFor="firstname"> Nombre </InputLabel>
                        <StyledInput id="firstname" type="text" name="firstname" />
                    </FormControl>
                </Box>

                <Box>
                    <FormControl>
                        <InputLabel htmlFor="razonsocial"> Razon Social </InputLabel>
                        <StyledInput id="razonsocial" type="text" name="razonsocial" />
                    </FormControl>
                </Box>

                <Box>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Activo" />
                </Box>
                <Box>
                    <Button type="submit" variant="contained" color="primary">
                        <Link to="/" style={{ textDecoration: 'none', color: "#4154FF" }}>
                            Crear
                             </Link>
                    </Button>
                </Box>

            </Box>
           
           
            <Box sx={{ width: "100%" }}>
                <Typography variant="h4" sx={{
                    fontWeight: "bold",
                    color: "#202980", marginBottom: 2
                }}>
                    Listado de Empresas</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', width: "80%", justifyContent: 'space-between' }}>
                    <Typography variant="h6"> Banco Galicia</Typography>
                    <Typography variant="h6"> Grupo Financiero Galicia S.A </Typography>
                    <Box >
                        <Button sx={{ m: 1 }} variant="outlined" color="secondary">Disable</Button>
                        <Button variant="outlined" color="secondary">Delete</Button>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', width: "80%", justifyContent: 'space-between' }}>
                    <Typography variant="h6"> Ualá</Typography>
                    <Typography variant="h6"> UALA S A </Typography>
                    <Box >
                        <Button sx={{ m: 1 }} variant="outlined" color="secondary">Disable</Button>
                        <Button variant="outlined" color="secondary">Delete</Button>
                    </Box>
                </Box>

            </Box>


        </Container>
    )
}

export default BusinessManager;