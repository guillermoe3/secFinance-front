import Button from '@mui/material/Button';
import { FormControl, Input, InputLabel, FormHelperText, TextField, Container, Grid, Box, styled } from '@mui/material';
import { useState, useEffect } from "react"
import Check from "./Check"


const StyledInput = styled(Input)({
    width: "40vh",
});

function Analysis() {

    const [data, setData] = useState([])

    //"Dato1", "dato2", "dato3"

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



    // {data ? data.map((check)=> <Check /> ) : <h2>Cargando...</h2>}
    return (

        <Container maxWidth="lg">
            <h2> Investigación </h2>
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