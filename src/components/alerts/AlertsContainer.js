import AlertList from "./AlertList"
import {Container, Typography} from '@mui/material'


function AlertsContainer () {
    return (
       
        <Container maxWidth="lg" sx={{ 
                marginTop: 1,
                border: "0.5px solid",
                padding: "10px",
                boxShadow: 5, 
                backgroundColor: "white", 
                borderColor: 'grey.200',
                borderRadius: 3, 
                height: "200vh"
            }}>
                <Typography variant="h4" sx={{
                fontWeight: "bold",
                color: "#202980",
                marginBottom: 4
            }}>Listado de Alertas</Typography>
                 <AlertList/>
          
              
            

                
            </Container>

            
    
    )
}

export default AlertsContainer