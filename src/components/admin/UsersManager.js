import { Container, Box, FormControl, InputLabel, Input, styled, FormControlLabel, Checkbox, Button, Typography, Select, MenuItem} from '@mui/material'
import { Link } from "react-router-dom"
import {useState, useEffect} from "react"

    
  
function UsersManager() {

/*
    const users = [{
        "id_user": "1",
        "name": "John",
        "email": "john@bancogalicia.com.ar",
        "active": true,
        "id_business": "1"
    },
    {
        "id_user": "2",
        "name": "Robert",
        "email": "Robert@uala.com.ar",
        "active": true,
        "id_business": "2"
    }]
*/
    

    const [users, setUsers] = useState([]);

    const getUsers = async () => {

        const response = await fetch("http://localhost:3004/users")
        const data = await response.json();
        setUsers(data)
        
        //console.log(data)

    }

    useEffect(
        () => {
            getUsers();
        },[])


    const [business, setBusiness] = useState('');

    const handleChange = (event) => {
        setBusiness(event.target.value);
      };

      /*
      
                        <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Business</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={business}
                            label="Business"
                            onChange={handleChange}
                            >
                            <MenuItem value={10}>Banco Galicia</MenuItem>
                            <MenuItem value={20}>Banco Macro</MenuItem>
                            <MenuItem value={30}>Uala</MenuItem>
                            </Select>
                        </FormControl>
                        </Box>

      
      <Button variant="outlined" color="secondary">Asignar A</Button>
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


            <Typography variant="h4" sx={{
                fontWeight: "bold",
                color: "#202980", marginBottom: 2
            }}>
                Listado de Usuarios
                    </Typography>

            <Box sx={{ width: "100%" }}>

            <Box sx={{ display: 'flex', flexDirection: 'row', width: "100%", justifyContent: 'space-between' }}>
                <Typography sx={{width: "25%"}}>Email</Typography>
                <Typography > Nombre</Typography>
                <Typography>Empresa ID</Typography>
                <Typography sx={{m:1}}></Typography>
                <Typography></Typography>
            </Box>
                {users ? 
                    users.map((user, i) =>

                        <Box key={i} sx={{ display: 'flex', flexDirection: 'row', width: "100%", justifyContent: 'space-between' }}>
                            <Typography sx={{width: "35%"}} variant="h6"> {user.email}</Typography>
                            <Typography sx={{width: "15%"}} variant="h6"> {user.name}</Typography>
                            <Typography variant="h6"> {user.id_business} </Typography>
                            <Typography variant="h6"> {user.active} </Typography>

                            <Box >
                                <Button sx={{ m: 1 }} variant="outlined" color="secondary"> {user.active == '1' ? "Disable" : "Active" } </Button>
                                
                            </Box>


                        </Box>



                    ) : ""}





            </Box>


        </Container>
    )
}

export default UsersManager;