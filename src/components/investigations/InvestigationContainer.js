import Investigation from "./Investigation"
import InvestigationList from "./InvestigationList"
import {Container, Grid} from "@mui/material"


function InvestigationContainer() {
    return (


        <Container maxWidth="lg">
            <Grid item xs={12} sx={{m:5}}>
            <Investigation />
            </Grid>
            
            <Grid item xs={12} sx={{m:5}} >
            <InvestigationList />
            </Grid>

        </Container>

    )
}

export default InvestigationContainer