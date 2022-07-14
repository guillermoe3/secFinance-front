
import SimpleBar from "../charts/SimpleBar"
import SimpleBar2 from "../charts/SimpleBar2"
import Pie from "../charts/Pie"
import Container from '@mui/material/Container'
import {Box, Typography} from '@mui/material/'


//<Container maxWidth="md" sx={{marginBottom: "10vh"}}>
function Home() {


    const data = [
        { analista: 'Analista1', cantidad: 2.525 },
        { analista: 'Analista2', cantidad: 3.018 },
        { analista: 'Analista3', cantidad: 3.682 },
        { analista: 'Analista4', cantidad: 4.440 },
        { analista: 'Analista5', cantidad: 5.310 },
        { analista: 'Analista6', cantidad: 6.127 },
        { analista: 'Analista7', cantidad: 6.930 },
      ];




    return (

        <div>
            <Container maxWidth="lg" sx={{ 
            marginTop: 1,
            border: "0.5px solid",
            padding: "10px",
            boxShadow: 5, 
            backgroundColor: "white", 
            borderColor: 'grey.200',
            borderRadius: 3, 
            marginBottom: "10vh"
          }}>

            
            <Typography variant="h4" sx={{
                    fontWeight: "bold",
                    color: "#202980",
                    marginBottom:4
                }}> Estadisticas</Typography>


                <Box sx={{m: 2}}>
                    
                    
                    <SimpleBar/>
                </Box>
                
                <Box sx={{m: 2}}>
                    <Pie/>
                </Box>




                


            </Container>


            
        </div>
    )
}

export default Home;