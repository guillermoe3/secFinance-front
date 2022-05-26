import {useState, useEffect} from "react"
import AlertItem from "./AlertItem"
import {Box, Container} from "@mui/material"


const resume = "Phasellus vel pharetra libero. Proin vel nibh sed risus fermentum efficitur. Aliquam mattis metus non commodo rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in accumsan ante. Sed sit amet dignissim turpis, eu feugiat diam. Suspendisse potenti."
const lipsum = "Maecenas a lobortis sem, vel aliquet magna. Donec a quam id dolor laoreet porttitor. Nunc quis tellus leo. Nam ac mauris id diam condimentum tristique. Nullam iaculis varius venenatis. Nulla vitae malesuada tortor. Praesent vehicula egestas mauris, a lobortis erat dapibus a. Nullam blandit bibendum ex sed commodo. Sed convallis, mauris ut aliquet tristique, neque libero fringilla diam, id sollicitudin lacus diam ac augue. Phasellus condimentum dolor sagittis vestibulum bibendum. Cras sed risus eget neque semper suscipit a vitae ante"+"Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In vitae accumsan odio. Nunc a felis vulputate, iaculis mauris vitae, sagittis nibh. In malesuada eget urna molestie molestie. Nullam a magna sodales, suscipit justo pharetra, consequat sem. In consequat, mi non vehicula aliquam, orci elit pulvinar diam, non congue mauris tortor vehicula ligula. Cras consequat urna et tristique aliquam. Quisque id vehicula massa. Nulla quis odio ut dui placerat eleifend. Etiam libero diam, ornare ac luctus sed, consequat sed velit. Interdum et malesuada fames ac ante ipsum primis in faucibus."
// <Container maxWidth="lg">
        
function AlertList (){

    const [list, setList] = useState("");


    return(

        <Box> 
            <AlertItem category="Security" risk="High" title="Esto es una alerta" resume={resume} body1="Resumen de la alerta" body2={lipsum} />
            <AlertItem category="Phishing" risk="Low" title="Esto es una alerta de Phishing" resume={resume} body1="Resumen de la alerta" body2={lipsum} />
            <AlertItem category="Awareness" risk="Medium" title="Esto es una alerta de Awareness" resume={resume} body1="Resumen de la alerta" body2={lipsum} />
        </Box>
        
         
        )
        
   
}

export default AlertList