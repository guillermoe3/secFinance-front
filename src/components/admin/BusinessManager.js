import { Container, Box, FormControl, InputLabel, Input, styled, FormControlLabel, Checkbox, Button, Typography } from '@mui/material'
import { Link } from "react-router-dom"
import {useState, useEffect} from "react"

const StyledInput = styled(Input)({
    width: "30vh",
    margin: "10px",
});

function BusinessManager() {


    const newBusiness = (e) => {
        e.preventDefault();
        
        
    }


    const [business, setBusiness] = useState([]);

    const getBusiness = async () => {

        const response = await fetch("http://localhost:3004/business")
        const data = await response.json();
        console.log(data)
       //const array = data.values();
        setBusiness(data);

    }

    useEffect(() => {
        getBusiness();
    },[])



    /*     <Box sx={{ display: 'flex', flexDirection: 'row', width: "80%", justifyContent: 'space-between' }}>
                        <Typography variant="h6"> ID: {dato.id_business}</Typography>
                        <Typography variant="h6"> Nombre: {dato.name} </Typography>
                        <Box>
                            <Button sx={{ m: 1 }} variant="outlined" color="secondary">Disable</Button>
                            <Button variant="outlined" color="secondary">Delete</Button>
                        </Box>
                </Box>
                
                
                
                
           
            <Box sx={{ width: "100%" }}>
                
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
                
                
                
                
                */

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

                <form onSubmit={newBusiness}> 
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
                                    Crear
                            </Button>
                        </Box>

                </form>

            </Box>
           
            <Typography variant="h4" sx={{
                    fontWeight: "bold",
                    color: "#202980", marginBottom: 2
                }}>
                    Listado de Empresas</Typography>


                    {business ? 
                
                business.map((dato) => 
                <Box sx={{display:"flex", flexDirection: "row"}}> 
                    <Typography sx={{marginRight: 3}}> {dato.id_business} </Typography>
                    <Typography sx={{fontSize:"18px", }}>{dato.name} </Typography>
                    
                </Box>
                
                
                ): ""}

           
            
           

        

           

        </Container>
    )
}

export default BusinessManager;