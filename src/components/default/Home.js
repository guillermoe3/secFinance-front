
import SimpleBar from "../charts/SimpleBar"
import Pie from "../charts/Pie"
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'


//<Container maxWidth="md" sx={{marginBottom: "10vh"}}>
function Home() {
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

            
                <p>Estadisticas</p>
                <Box sx={{m: 2}}>
                    <SimpleBar />
                </Box>


                <Box sx={{m: 2}}>
                    <Pie />
                </Box>


            </Container>


            
        </div>
    )
}

export default Home;