import { useState, useEffect } from "react"
import Container from '@mui/material/Container'
import { Card, CardMedia, CardContent, Typography, Box, CardActions, Button } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import {useParams} from "react-router-dom"



function Alert(props) {

    let {id} = useParams();
    console.log(id)

    const [alert, setAlert] = useState("");

    const getAlert = async () => {

        const response = await fetch(`http://localhost:3004/alerts/${id}`)
        const data = await response.json();
        console.log(data)
        setAlert(data);

        
    }


    useEffect( () => {

        getAlert();
        
    },[])
    


    return (

        <Container maxWidth="lg">
            <Card sx={{m: 2}}>

                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                        {alert.category}
                        
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="red" gutterBottom>
                        {alert.severity}
                        
                </Typography>
                    <Typography variant="h5" component="div">
                    {alert.titulo}
                    
                </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {alert.body1}
                   
                 </Typography>
                    <Typography variant="body2">
                    {alert.body2}
                     
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                </CardActions>




            </Card>
        </Container>



    )
}



export default Alert;