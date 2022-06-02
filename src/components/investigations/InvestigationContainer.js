import Investigation from "./Investigation"
import InvestigationList from "./InvestigationList"
import {Container, Grid} from "@mui/material"


//5
// <Container maxWidth="lg">
function InvestigationContainer() {
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
            <Grid item xs={12} sx={{m:5,
            border: "0.1px solid", 
            borderColor: "white",
            boxShadow: 4, 
            backgroundColor: "white",
            p: 4}}>
            <Investigation />
            </Grid>
            
            <Grid item xs={12} sx={{m:5,
            border: "0.1px solid", 
            borderColor: "white",
            boxShadow: 4, 
            backgroundColor: "white",
            p: 4}} >
            <InvestigationList />
            </Grid>

        </Container>

    )
}

export default InvestigationContainer