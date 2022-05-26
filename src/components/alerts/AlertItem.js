import { useState, useEffect } from "react"
import Container from '@mui/material/Container'
import { Card, CardMedia, CardContent, Typography, Box, CardActions, Button } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import {Link} from "react-router-dom"




function Alert(props) {
    return (

        <Container maxWidth="lg">
            <Card variant="outlined" sx={{width: "100%",m: 2, 
                border: "0.1px solid", 
                borderColor: "white",
                boxShadow: 4, 
                backgroundColor: "white"}}>

                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                        {props.category}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="red" gutterBottom>
                        {props.risk}
                </Typography>
                    <Typography variant="h5" component="div">
                    {props.title}
                </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.body1}
                 </Typography>
                    <Typography variant="body2">
                    {props.resume}
                    </Typography>
                </CardContent>
                <CardActions>
                
                    <Button size="small"> 
                        <Link to={`/alerts/1`} style={{textDecoration:"none"}}> Leer más </Link>
                    </Button>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                </CardActions>




            </Card>
        </Container>



    )
}

export default Alert;