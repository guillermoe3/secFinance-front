import { Container, Input, Button, Box, Grid, Typography, FormControl, InputLabel, Checkbox, FormControlLabel} from '@mui/material'
import { Link, useNavigate} from "react-router-dom";
import {useState, useContext} from "react"

import UserContext from "../../context/UserContext"


function Login() {

    //Bitacora login
    const createEvent = (severity, event, userEmail) => {


        let fetchEvent = fetch("http://localhost:3004/events/create", 
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                severity : severity, 
                event: event, 
                userEmail : userEmail
              })

        })}
    
    
     //Context User
     const {login, getUser} = useContext(UserContext);


    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });


    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);

    const {email, password} = inputs;

    const onChange = (e) => {
        //console.log(e.target.value)
        setInputs(
            {...inputs, 
            [e.target.name] : e.target.value})
    }


    //#region login request
    const url = "http://localhost:3004/login";

    const body = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email, 
            password: password,
          })
    }
    //#endregion

    const onSubmit = async (e) => {
        e.preventDefault();
       // console.log("se ejecutó el submit");
        //console.log({inputs});
        if(email !== "" && password !== ""){
            const user = {
                email,
                password,
            };
            setLoading(true);
            const response = await fetch(url, body)
           const data = await response.json();
           
           console.log(data);
           login(data);
           
           if (data.accessToken) { 
            createEvent("Informational", "Login exitoso", data.email)
            setInputs({
                email: "",
                password: ""});
                setMsg(data)
                
                setTimeout( () => {
                   setMsg("");
                   navigate("/home");
    
               }, 500)
               setLoading(true);

           } else {
               setMsg({msg:"Usuario no habilitado o incorrecto"});
                 createEvent("Low", "Login erroneo", email)}
           
        } else setMsg({msg:"Complete todos los campos"})
        
    }


    return (

        <Container maxWidth="md" sx={{ maxHeight: "100%", }}>
            <Typography align="center" variant="h5">Login</Typography>

            <form onSubmit={ (e) => {onSubmit(e)}} > 
            <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
                sx={{ marginTop: "7vh" }}

            >

                <Box sx={{ m: 2 }}>
                    <FormControl>
                        <InputLabel htmlFor="user"> Usuario </InputLabel>
                        <Input onChange={ (e) => {onChange(e)}} id="user" type="text" name="email" />
                    </FormControl>
                </Box>

                <Box>
                    <FormControl>
                        <InputLabel htmlFor="password"> Password </InputLabel>
                        <Input onChange={ (e) => {onChange(e)}} id="password" type="password" name="password" />
                    </FormControl></Box>


                 <FormControlLabel control={<Checkbox defaultChecked />} label="Recordarme" />
                 
                <Box sx={{ m: 5 }}>
                    <Button type="submit" variant="contained" color="primary">
                    {loading ? "Cargando..." : "Ingresar"}
                            
                    </Button>
                </Box>


            </Grid>
            </form>
            {msg && <Box sx={{color:"red"}}> {msg.msg}</Box>}

        </Container>
    )
}

export default Login;