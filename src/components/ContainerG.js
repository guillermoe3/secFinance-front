import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import Button from '@mui/material/Button'
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FormControl, Input, InputLabel, FormHelperText, useEventCallback} from '@mui/material';
import {useState} from "react"


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://secfinance.com.ar/">
        Sec Finance
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

//Sobre el button <Copyright sx={{ pt: 4 }} />

function ContainerG() {

  const [datos, setDatos] = useState({
    ioc: "", 
    tipo: ""
  })

  const handleInputChange = (event) => {
    //console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
    })

  }

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      type: "domain",
      ioc: datos.ioc,
      description: "desde React" })
    };


    const url = "http://localhost:3004/analysis";

    const fetchApi = async () => {
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      return data;
    }

  const sendData = (event) => {
    event.preventDefault();
    const data = fetchApi();

    console.log(data)

  }



  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

        {


        }
        <form onSubmit={sendData}>
        <FormControl>
          <InputLabel htmlFor="my-input">IOC Label </InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" name="ioc" onChange={handleInputChange}/>
          <FormHelperText id="my-helper-text">Insertar IOC a analizar.</FormHelperText>

          <Button variant="contained" type="submit">Enviar</Button>
        </FormControl>
        </form>
        {datos.ioc}


        <Button color="primary">boton fuera del form</Button>

        <Box mt={10}
          sx={{
            border: '2px solid grey',

          }}
        >

          Esto es un box

        </Box>
        <Box
          sx={{
            border: '2px solid grey'
          }}
        >
          Esto es un box2
        </Box>



      </Container>

    </div>
  )
}

export default ContainerG;


