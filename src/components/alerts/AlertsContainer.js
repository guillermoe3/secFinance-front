import AlertList from "./AlertList"
import Container from '@mui/material/Container'


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
                height: "100%"
            }}>
                <h2>Listado de Alertas</h2>
                 <AlertList/>
          
              
            

                
            </Container>

            
    
    )
}

export default AlertsContainer