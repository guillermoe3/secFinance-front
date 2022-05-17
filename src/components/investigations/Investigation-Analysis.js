import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import { FormControl, Input, InputLabel, FormHelperText, TextField} from '@mui/material';
import {useState} from "react"
import Container from '@mui/material/Container';



function Investigation () {
    

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

                <form onSubmit={sendData}>
                <FormControl>
                  <InputLabel htmlFor="my-input">IOC Label </InputLabel>
                  <Input id="my-input" aria-describedby="my-helper-text" name="ioc" onChange={handleInputChange}/>
                  

                <TextField
                id="standard-multiline-static"
                label="Detalle"
                multiline
                rows={4}
                variant="standard"
                />
                  
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

export default Investigation;