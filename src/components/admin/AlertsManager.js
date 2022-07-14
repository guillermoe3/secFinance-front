import { Container, Box, FormControl, InputLabel, Input, styled, FormControlLabel, Checkbox, Button, Typography, FormHelperText, 
Select, MenuItem} from '@mui/material'
import { Link } from "react-router-dom"

import {useState, useContext, useEffect} from "react"
import UserContext from "../../context/UserContext"

const StyledInput = styled(Input)({
    width: "70vh",
});

function AlertsManager (){


    const {getUser, isLogged, logout, getRole} = useContext(UserContext);

  let user = getUser();


    const [business, setBusiness] = useState([]);

    const getBusiness = async () => {
        const response = await fetch("http://localhost:3004/business")
        const data = await response.json();
        
        setBusiness(data)
        
    }

    const [alertSent, setalertSent] = useState("");

    const createAlert = async (e) => {
        e.preventDefault();

        let category = e.target.category.value;
        let titulo = e.target.titulo.value;
        let id_user = user.userId;
        let body1 = e.target.body1.value;
        let body2 = e.target.body2.value;
        let severity = e.target.severity.value;

    
        setalertSent("Alerta enviada")
       // console.log(data)

        const response = await fetch("http://localhost:3004/alerts", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            body: JSON.stringify({
                category : category, 
                titulo: titulo, 
                id_user: id_user, 
                body1: body1, 
                body2: body2, 
                severity: severity, 
                business: JSON.stringify(checkValues)
            })
        });
        const data = await response.json();

    }

    useEffect( () => {

        setalertSent("");

        getBusiness();

        
    }, [])

    const [checkValues, setCheckValues] = useState([]);

    const getValue = (e, checked) => {

        let data = checkValues;

        if(checked == true){
            data.push(e.target.value);
            //console.log(data)
            //console.log(checked)

        } else {

            const index = data.indexOf(e.target.value);
            if (index > -1) { // only splice array when item is found
            data.splice(index, 1); // 2nd parameter means remove one item only
}

        }
        console.log(data)
        setCheckValues(data)
    }




    return (
        <Container maxWidth="lg" sx={{
            marginTop: 1,
            border: "0.5px solid",
            padding: "10px",
            boxShadow: 5,
            backgroundColor: "white",
            borderColor: 'grey.200',
            borderRadius: 3,
            height: "130vh",
        }}> 

     
        

        <Typography variant="h4" sx={{
                        fontWeight: "bold",
                        color: "#202980", m: 2
                    }}>Crear nueva Alerta</Typography>


            <form onSubmit={createAlert}>
                <Box sx={{ display: 'flex', flexDirection: 'column', m: 4, alignItems: "center"}}>
                        <Box>
                            <FormControl>
                                <InputLabel htmlFor="title"> Titulo </InputLabel>
                                <StyledInput id="titulo" type="text" name="titulo" />
                            </FormControl>
                        </Box>

                        <Box>
                            <FormControl>
                                <InputLabel htmlFor="category"> Categoria </InputLabel>
                                <StyledInput id="category" type="text" name="category" />
                            </FormControl>
                        </Box>

                        <Box>
                            <FormControl>
                                <InputLabel htmlFor="category"> Criticidad </InputLabel>
                                <StyledInput id="severity" type="text" name="severity" />
                            </FormControl>
                        </Box>

                        <FormControl>

                            <InputLabel htmlFor=""> Body1 </InputLabel>
                            <Input sx={{width: "70vh"}} id="body1" type="text" aria-describedby="description-helper" multiline={true} maxRows="10" />
                            <FormHelperText id="description-helper">Body principal de la alerta</FormHelperText>

                        </FormControl>

                        <FormControl>

                            <InputLabel htmlFor=""> Body2 </InputLabel>
                            <Input sx={{width: "70vh"}} id="body2" type="text" aria-describedby="description-helper" multiline={true} maxRows="10" />
                            <FormHelperText id="description-helper">Body secundario de la alerta</FormHelperText>

                        </FormControl>
                        
        

                        <Box sx={{display: "flex", flexDirection:"column", marginLeft: 7, marginBottom: 2}}>


                            <FormControlLabel
                            label="Todos"
                            control={
                                <Checkbox
                                value="300"
                                onChange={(e, checked) => getValue(e, checked)}
                                color="secondary"
                                />
                            }
                            />

                            {business ? 
                                business.map( (dato, i) => 

                                <FormControlLabel
                                    label= {dato.name}
                                    control={
                                        <Checkbox
                                            value={dato.id_business}
                                            onChange={(e, checked) => getValue(e, checked)}
                                            color="secondary"
                                        />
                                        }
                                />
                                            )
                            : ""} 
                            
                            </Box> 

    
                        <Box>
                            <Button type="submit" variant="contained" color="primary">
                                    Crear
                            </Button>
                        </Box>

                        </Box>
        
                    </form>

                    {alertSent ? alertSent : ""}


                     

        
        </Container>
    )
}

export default AlertsManager;