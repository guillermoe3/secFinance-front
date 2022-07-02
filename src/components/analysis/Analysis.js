import Button from '@mui/material/Button';
import { FormControl, Input, InputLabel, FormHelperText, TextField, Container, Grid, Box, styled, Typography} from '@mui/material';
import { useState, useEffect } from "react"
import Check from "./Check"
import {useParams } from 'react-router-dom';


const StyledInput = styled(Input)({
    width: "40vh",
});

function Analysis() {

    const [data, setData] = useState([])

    let {id, user} = useParams();
    console.log("user es "+ user + " y el id es "+id)



    const fetchApi = async () => {

        const response = await fetch(`http://localhost:3004/analysis/${id}`);
        const data = await response.json();
        console.log(data);
        setData(data)
        
    }
    

    useEffect( () => {

        fetchApi()
    },[])
    

    
    const addCheck = e => {
        e.preventDefault();
        let ioc = e.target.ioc.value;
        let description = e.target.description.value;
        setData([
            ...data,
            {
                ioc: ioc,
                description: description
            }
        ])
    }

    const removeCheck = (ioc) => {
        //buscar por ioc y remover en el state. 
        console.log("ejecuté removeCheck")
        console.log("el ioc a borrar es "+ioc)
        console.log(data)
       // setData(data.filter(item => item.ioc !== ioc));
        console.log("data quedó así")
        console.log(data)
    }



    // {data ? data.map((check)=> <Check /> ) : <h2>Cargando...</h2>}

    //removeCheck={removeCheck} 
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
        color: "#202980",
        marginTop:4,
        marginBottom:4
      }}> Investigación </Typography>
      <Button type="submit" variant="outlined" sx={{marginLeft:"70%"}}> Request review</Button>
            <p>Lorem ipsum dolor sit amet, consect</p>
            


            <form onSubmit={addCheck}>

                <Grid
                    container
                    direction="column"
                    justifyContent="left"
                    alignItems="center"
                    spacing={4}

                >
                    <Box sx={{ m: 3, display: "flex", flexDirection: "column" }}>

                        <FormControl sx={{marginTop:2}}>
                            <InputLabel htmlFor="firstname"> IOC </InputLabel>
                            <StyledInput type="text" name="ioc" />
                        </FormControl>

                        <FormControl sx={{marginTop:2}}>
                            <InputLabel htmlFor="firstname"> Descripción </InputLabel>
                            <StyledInput type="text" name="description" />
                        </FormControl>
                    </Box>
                    <Box>
                        <Button type="submit" variant="contained" color="primary"> Crear!</Button>
                    </Box>
                </Grid>
            </form>
            {console.log(data)}
            

            {data ? data.map((dato, i) => {
                
                return <Check key={i} value={dato} />
            }) : <h2>Cargando...</h2>}


        </Container>








    )
}

export default Analysis;