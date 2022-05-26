import { Box, Container, Typography } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"
import InvestigationList from "../investigations/InvestigationList"


const users = [{
    "nombre": "John", "cantidad": "4"
}, {
    "nombre": "Marcelo", "cantidad": "3"
}, {
    "nombre": "Roberto", "cantidad": "40"
}, {
    "nombre": "Enzo", "cantidad": "5"
}, {
    "nombre": "Gallardo", "cantidad": "12"
}]


function Business() {
    const [nums, setNums] = useState([1, 2, 3, 4]);

    /*                <ul>{users.map((user, i) => 
                            <li key={i}>
                            {users[i].nombre} Cantidad: {users[i].cantidad}
                            </li>)}
                    </ul> */


    return (
        <Container maxWidth="lg" sx={{ 
        marginTop: 1,
        border: "0.5px solid",
        padding: "10px",
        boxShadow: 5, 
        backgroundColor: "white", 
        borderColor: 'grey.200',
        borderRadius: 3
      }}>

            <h2>Mis compañeros</h2>
            <Box sx={{
                width: "40vw",
                marginBottom: "5vh"
            }}>


                <Box sx={{
                    display: "flex",
                    justifyContent: 'space-between',
                    alignItems: 'center', width: "30vw", marginBottom: "5vh"
                }}>
                    <Typography variant="h6">Nombre</Typography>
                    <Typography variant="h6" sx={{ marginLeft: 20 }}>Cant. de investigaciones</Typography>
                </Box>

                {users.map((user, i) =>

                    <Box sx={{
                        display: "flex",
                        justifyContent: 'space-between',
                        alignItems: 'center', width: "30vw"
                    }}>
                        <Typography variant="h5">{users[i].nombre}</Typography>
                        <Typography variant="h5"><Link to="/">{users[i].cantidad}</Link></Typography>
                    </Box>

                )}


            </Box>



            <Box>
                Investigaciones de la empresa

                <InvestigationList />



            </Box>

        </Container>


    )
}
export default Business;