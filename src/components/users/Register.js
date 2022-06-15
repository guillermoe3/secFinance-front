import { Container, Input, Button, Box, Grid, Typography, FormControl, InputLabel} from '@mui/material'
import {Link, useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"
import { styled } from "@mui/system";


//sx={{m: 2, width: "30vw"}}

const StyledInput = styled(Input)({
    width: "30vh", 
    margin: "10px",
});

function Register (){

    const [inputs, setInputs] = useState({
        email: "",
        name: "", 
        lastname: "",
        password: "",
        password2:"",

    });

    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);

    const {email, name, lastname, password, password2} = inputs;

    const onChange = (e) => {
        console.log(e.target.value)
        setInputs(
            {...inputs, 
            [e.target.name] : e.target.value})
    }

    const url = "http://localhost:3004/users";

    const body = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            lastname: lastname,
            email: email, 
            password: password,
            confPassword: password2,
          })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
       // console.log("se ejecutó el submit");
        //console.log({inputs});
        if(name !== "" && email !== "" && lastname !== "" && password !== ""){
            const user = {
                name,
                lastname, 
                email,
                password,
                password2,
            };
            setLoading(true);
            const response = await fetch(url, body)
           const data = await response.json();
           // console.log(data);
           setInputs({
            email: "",
            name: "", 
            lastname: "",
            password: "",
            password2:"",
    
        })
           setMsg(data)
           setTimeout( () => {
                
               setMsg("");
               navigate("/");

           }, 3000)
           
        } else setMsg({msg:"Complete todos los campos"})
        
    }

    const navigate = useNavigate();


    return(
        <Container maxWidth="md" sx={{maxHeight: "100%", }}>
        <Typography sx={{
            marginTop:10
        }} align="center" variant="h5">Registrarse en la plataforma</Typography>
        
        <form onSubmit={ (e) => {onSubmit(e)}} > 
        <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            sx={{marginTop: "10vh", width: "100%"}}
            
            
        >
            
                
                <Box>
                <FormControl>
                    <InputLabel htmlFor="name"> Nombre </InputLabel>
                     <StyledInput onChange={ (e) => {onChange(e)}} id="firstname" type="text" name="name"/>
                     
                     </FormControl>
                </Box>
                                
                <Box>
                <FormControl>
                    <InputLabel htmlFor="lastname"> Apellido </InputLabel>
                     <StyledInput onChange={ (e) => {onChange(e)}} id="lastname" type="text" name="lastname" />
                     </FormControl>
                </Box>
                
                <Box>
                <FormControl>
                    <InputLabel htmlFor="email"> Email </InputLabel>
                     <StyledInput onChange={ (e) => {onChange(e)}} id="email" type="email" name="email" />
                     </FormControl>
                </Box>

                <Box>
                <FormControl>
                     <InputLabel htmlFor="password"> Password </InputLabel>
                    <StyledInput onChange={ (e) => {onChange(e)}} id="password" type="password" name="password" /> 
                    </FormControl></Box>
                    <Box>
                <FormControl>
                     <InputLabel htmlFor="password"> Reingrese password </InputLabel>
                    <StyledInput onChange={ (e) => {onChange(e)}} id="password2" type="password" name="password2" /> 
                    </FormControl></Box>
                <Box sx={{m: 5}}>
                    <Button type="submit" variant="contained" color="primary">
                    
                         {loading ? "Cargando..." : "Registrarse!"}
                         
                         </Button>
                </Box>

                
                
            
        </Grid>
        </form>

        {msg && <Box sx={{color:"red"}}> {msg.msg}</Box>}
    </Container>
    )
}

export default Register;