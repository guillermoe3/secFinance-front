import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import { FormControl, Input, InputLabel, FormHelperText, TextField, Container, Grid } from '@mui/material';
import { useState } from "react"
import {Link} from "react-router-dom"



function Investigation() {


/*
  <Link to={`/item/${product.id}`} style={{textDecoration:"none"}}> 
                Ver detalle
                </Link> */

  return (


    <Container maxWidth="lg">

      <h2>Crear Investigación</h2>


      <Grid item xs={8}>

        <FormControl sx={{width: "100%"}}>

          <InputLabel htmlFor=""> Nombre </InputLabel>
          <Input id="name" type="text" aria-describedby="name-helper" />
          <FormHelperText id="name-helper"> Nombre de la investigación</FormHelperText>


        </FormControl>
      </Grid>

      <Grid item xs={8} >
        <FormControl sx={{width: "100%"}} >

          <InputLabel htmlFor=""> Descripción </InputLabel>
          <Input id="description" type="text" aria-describedby="description-helper" multiline={true} maxRows="10" />
          <FormHelperText id="description-helper"> Descripción de la investigación</FormHelperText>

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