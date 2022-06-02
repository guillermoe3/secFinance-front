import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import {useState, useEffect} from "react"



function Check({ value }) {

    const [analysis, setAnalysis] = useState("");

    const url = "http://localhost:3004/investigations";
    
    const fetchApi = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setAnalysis(data);
      console.log(data)
    }

    //useEffect(() => {fetchApi()},[])

    return (
        <Container maxWidth="lg">
          
        <Box sx={{ p: 3, 
        m: 3, 
        border: '0.5px dashed grey', 
        boxShadow: "0 5px 10px 0 rgba(0, 0, 0, 0.3)"}} >
            <Box> IOC: {value.ioc} </Box>
            <Box> Descripción: {value.description} </Box>
            <Box> Result: {analysis ? analysis : "Cargando..."}</Box>

            <Box textAlign="right">
                <Button variant="text" color="secondary">
                    Edit
                </Button>
                <Button variant="text" color="secondary">
                    Delete
                </Button>
            </Box>
        </Box>
        </Container>

    )
}

export default Check;