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
            getBusiness();
            console.log(business)
        },[])


    const [business, setBusiness] = useState([]);

    const getBusiness = async () => {

        const response = await fetch("http://localhost:3004/business")
        const data = await response.json();
        console.log(data)
       //const array = data.values();
        setBusiness(data);
    }



      const manageUser = async (e) => {
        e.preventDefault();
          
          //si esta activo, desactivarlo. Caso contrario, activarlo. 

          console.log(e.target.id_user.value)
          console.log(e.target.id_business.value)

          //traer estado actual

          if (e.target.id_user.value){

          
          const response = await fetch(`http://localhost:3004/user/status/${e.target.id_user.value}`);
          const state = await response.json();

          console.log(state)

          if(state == true){
              //body para false

              const response = await fetch(`http://localhost:3004/user/${e.target.id_user.value}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    active: 0,
                  })
            })
            const data = await response.json();
            console.log(data)
          } else {
                  //body para true
                  const response = await fetch(`http://localhost:3004/user/${e.target.id_user.value}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    active: 1,
                  })
            })
            const data = await response.json();
            console.log(data)
              
          }

        }

         

          //si id_business tiene algo, enviar el dato para cambiarlo


            /*
          const response = await fetch("asd", {

          })
          const data = await response.json();

          console.log(data)*/

          


      }


      /*
            const [age, setAge] = useState("0")

      const handleChange = async (e) => {
          //setBusiness(event.target.value);
          console.log(e.target.age.value)
          console.log()
      }
      
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




                            <Box sx={{ minWidth: 120 }}>
                                    
                                    <InputLabel id="inputLabelbusiness">Business</InputLabel>
                                    <FormControl sx={{width:"500px"}}>
                                        
                                    
                                        <Select
                                        labelId="inputLabelbusiness"
                                        id="selectbusiness"
                                        value={age}
                                        label="Business"
                                        name="age"
                                        onChange={handleChange}
                                        >

                                        {business ? 
                                        business.map( (bus, i) =>
                                            <MenuItem value={bus.name}>{bus.name}</MenuItem> ) 
                                        : "No hay elementos cargados"}
                                        
                                        </Select>
                                    </FormControl>

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
            height: "150vh",
        }}>


            <Typography variant="h4" sx={{
                fontWeight: "bold",
                color: "#202980", marginBottom: 2
            }}>
                Listado de Usuarios
                    </Typography>

            <Box sx={{ width: "100%" }}>

            <Box sx={{ display: 'flex', flexDirection: 'row', width: "100%", justifyContent: 'space-between' }}>
                <Typography sx={{width: "5%"}} variant="h6">ID</Typography>
                <Typography sx={{width: "25%"}} variant="h6">Email</Typography>
                <Typography sx={{width: "20px"}}variant="h6"> Nombre</Typography>
                <Typography variant="h6">Empresa ID</Typography>
                <Typography variant="h6" sx={{m:1}}></Typography>
                <Typography variant="h6">Activo?</Typography>
            </Box>
            <Box sx={{marginBottom: 4}}>
                {users ? 
                    users.map((user, i) =>

                        <Box key={i} sx={{ display: 'flex', flexDirection: 'row', width: "100%", justifyContent: 'space-between' }}>
                            <Typography sx={{width: "4px"}}> {user.id_usuario}</Typography>
                            <Typography sx={{width: "20%"}} > {user.email}</Typography>
                            <Typography sx={{width: "15%"}} > {user.name}</Typography>
                            <Typography> {user.id_business} </Typography>
                            <Typography> {user.active ? "Activo" : "Desactivado"} </Typography>



                        </Box>



                    ) : ""}

            </Box>

            <Box sx={{marginBottom:3}}>

            <Typography variant="h4" sx={{
                    fontWeight: "bold",
                    color: "#202980", marginBottom: 2
                }}>
                    Listado de Empresas</Typography>

                <Box sx={{display:"flex", flexDirection:"row"}}>
                    <Typography sx={{marginRight: "30px"}}> ID</Typography>
                    <Typography> Nombre</Typography>
                </Box>

                    {business ? 
                
                business.map((dato) => 
                <Box sx={{display:"flex", flexDirection: "row"}}> 
                    <Typography sx={{marginRight: 3}}> {dato.id_business} </Typography>
                    <Typography sx={{fontSize:"18px", }}>{dato.name} </Typography>
                    
                </Box>
                
                
                ): ""}

            </Box>
                <Box>
                    <form onSubmit={manageUser}>
                        <Typography variant="h6"> Ingrese ID del usuario</Typography>
                            <FormControl>
                                <Input id="id_user" type="text" name="id_user"/>
                            </FormControl>

                            <Typography variant="h6"> Ingrese ID de la empresa para asignar</Typography>
                            <FormControl>
                                <Input id="id_business" type="text" name="id_business"/>
                            </FormControl>
                            {/* Listado con las empresas con valor por defecto a la empresa que ya tiene asignado*/ }
                            <br/>
                            <Button sx={{ m: 1 }} type="submit" variant="outlined" color="secondary"> Cambiar estado</Button> 


                    </form>
                    

                </Box>
            </Box>


        </Container>
    )
}

export default UsersManager;