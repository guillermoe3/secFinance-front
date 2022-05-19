import { useState, useEffect } from "react"
import Container from '@mui/material/Container'
import { Card, CardMedia, CardContent, Typography, Box, CardActions, Button } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import {Link} from "react-router-dom"




function Alert(props) {
    return (

        <Container maxWidth="lg">
            <Card sx={{m: 2}}>

                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                        {props.category}
                        Categoria
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="red" gutterBottom>
                        {props.risk}
                        Riesgo
                </Typography>
                    <Typography variant="h5" component="div">
                    {props.title}
                    Titulo de la alerta
                </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.body1}
                    Body 1
                    Phasellus vel pharetra libero. Proin vel nibh sed risus fermentum efficitur. Aliquam mattis metus non commodo rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in accumsan ante. Sed sit amet dignissim turpis, eu feugiat diam. Suspendisse potenti.
                 </Typography>
                    <Typography variant="body2">
                    {props.body2}
                    Maecenas a lobortis sem, vel aliquet magna. Donec a quam id dolor laoreet porttitor. Nunc quis tellus leo. Nam ac mauris id diam condimentum tristique. Nullam iaculis varius venenatis. Nulla vitae malesuada tortor. Praesent vehicula egestas mauris, a lobortis erat dapibus a. Nullam blandit bibendum ex sed commodo. Sed convallis, mauris ut aliquet tristique, neque libero fringilla diam, id sollicitudin lacus diam ac augue. Phasellus condimentum dolor sagittis vestibulum bibendum. Cras sed risus eget neque semper suscipit a vitae ante.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In vitae accumsan odio. Nunc a felis vulputate, iaculis mauris vitae, sagittis nibh. In malesuada eget urna molestie molestie. Nullam a magna sodales, suscipit justo pharetra, consequat sem. In consequat, mi non vehicula aliquam, orci elit pulvinar diam, non congue mauris tortor vehicula ligula. Cras consequat urna et tristique aliquam. Quisque id vehicula massa. Nulla quis odio ut dui placerat eleifend. Etiam libero diam, ornare ac luctus sed, consequat sed velit. Interdum et malesuada fames ac ante ipsum primis in faucibus.

Phasellus sed ante ligula. Maecenas cursus nibh quis bibendum tempus. Nullam odio nibh, rutrum non pharetra nec, venenatis nec orci. Phasellus vitae pellentesque erat. Nam posuere ullamcorper libero nec mattis. Aenean lacus arcu, sagittis et dui nec, tincidunt fermentum odio. Aliquam lorem nisl, efficitur sit amet quam non, tempus fringilla arcu. Vivamus consequat libero pretium eros laoreet, a aliquet metus aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean hendrerit massa non sagittis fermentum.
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