import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import { FormControl, Input, InputLabel, FormHelperText, TextField, Container, Grid, Typography} from '@mui/material';
import { useState } from "react"
import {Link} from "react-router-dom"



function Investigation() {


/*
  <Link to={`/item/${product.id}`} style={{textDecoration:"none"}}> 
                Ver detalle
                </Link>
                
                
                
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
                
                
                */

  return (


    <Container maxWidth="lg">

      <Typography variant="h4" sx={{
        fontWeight: "bold",
        color: "#202980",
        marginBottom:4
      }}>Crear Investigación</Typography>

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
      <Grid>
        <Button variant="contained" color="primary">
          <Link style={{textDecoration: 'none', color: "#4154FF"}} to={`/investigation/1/analysis`}>Crear Investigación</Link></Button>
      </Grid>
    </Container>






  )
}

export default Investigation;