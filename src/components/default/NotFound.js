import {Box, Typography} from "@mui/material"
import {Link} from "react-router-dom"


function NotFound(){

   
    return (<Box sx={{
        fontSize:"40px",
        m: 5,
        display:"flex", 
        flexDirection:"column"
    }}>404 Not Found!
    
    <Typography sx={{fontSize:"20px"}}><Link to="/"> Back to Landing
    </Link></Typography>
    
    
    </Box>)
}

export default NotFound