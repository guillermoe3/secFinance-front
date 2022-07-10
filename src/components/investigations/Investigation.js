import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import { FormControl, Input, InputLabel, FormHelperText, TextField, Container, Grid, Typography, TableBody} from '@mui/material';
import { useState, useContext } from "react"
import {Link, useNavigate} from "react-router-dom"
import UserContext from "../../context/UserContext"




function Investigation() {

  const {getUser} = useContext(UserContext);
  let user = getUser();
  console.log(user.userId)

  const url = "http://localhost:3004/investigation";

  const body = {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_user: user.userId, 
          description: "description",
        })
  }

  const navigate = useNavigate();

 

  const newInvestigation = async (e) => {
    e.preventDefault();
    console.log("se ejecutó la nueva investigación")

    const response = await fetch(url, body);
    const data = await response.json();
    console.log(data)
    
    navigate(`/investigation/${user.userId}/${data.id_investigation}/analysis`);

  }

  /* 
  
      <div>
      <Link style={{textDecoration: 'none', color: "#4154FF"}} to={`/investigation/${user.userId}/analysis`}>Crear Investigación</Link>
      </div>
      
      */
  


  return (


    <Container maxWidth="lg">

      <Typography variant="h4" sx={{
        fontWeight: "bold",
        color: "#202980",
        marginBottom:4
      }}>Crear Investigación</Typography>

      <form onSubmit={newInvestigation}> 
      

        <Grid item xs={8}>
          <FormControl sx={{width: "100%", marginBottom: "2vh"}}>

            <InputLabel htmlFor=""> Nombre </InputLabel>
            <Input id="name" type="text" aria-describedby="name-helper" />

          </FormControl>
        </Grid>

        <Grid item xs={8} >
          <FormControl sx={{width: "100%", marginBottom: "2vh"}} >

            <InputLabel htmlFor=""> Descripción </InputLabel>
            <Input id="description" type="text" aria-describedby="description-helper" multiline={true} maxRows="10" />
            

          </FormControl>
        </Grid>
        
          <Button type="submit" variant="contained" color="primary">
          Crear Investigación
           
          </Button>
        
      </form> 

  


     
        

    </Container>







  )
}

export default Investigation;