import Chart from "../Chart"
import SimpleBar from "../charts/SimpleBar"
import Pie from "../charts/Pie"
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

function Home() {
    return (

        <div>

            <Container maxWidth="md">
                <p>Estadisticas</p>
                <Box sx={{m: 2}}>
                    <SimpleBar />
                </Box>


                <Box sx={{m: 2}}>
                    <Pie />
                </Box>


            </Container>


            <Chart />
        </div>
    )
}

export default Home;