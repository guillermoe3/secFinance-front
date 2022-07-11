import Button from '@mui/material/Button';
import { FormControl, Input, InputLabel, FormHelperText, TextField, Container, Grid, Box, styled, Typography} from '@mui/material';
import { useState, useEffect, useContext} from "react"
import Check from "./Check"
import {useParams } from 'react-router-dom';
import UserContext from "../../context/UserContext"
import Description from "./Description"


const StyledInput = styled(Input)({
    width: "40vh",
});

function Analysis() {

    const [closed, setClosed] = useState(false)

    const isClosed = async () => {

        const response = await fetch(`http://localhost:3004/investigation/${id}/closed`)
        const data = await response.json()
        setClosed(data)

    }

    const requestReview = async () => {

        const response = await fetch(`http://localhost:3004/investigation/${id}/update`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            body: JSON.stringify({
                review: "1"
            })
        });
   
        setRequested(true)
        

    }

    const [requested, setRequested] = useState(false)
    const isRequestReview = async () => {
        const response = await fetch(`http://localhost:3004/investigation/${id}/requested`)
        console.log(`http://localhost:3004/investigation/${id}/requested`)
        const data = await response.json()
        setRequested(data)

    }

    const [data, setData] = useState([])

    const {getUser, isLogged, logout, getRole} = useContext(UserContext);
    let userLogged = getUser();
    let role = getRole();

    let {id, user} = useParams();
    console.log("user es "+ user + " y el id es "+id)



    const fetchApi = async () => {
        const response = await fetch(`http://localhost:3004/analysis/${id}`);
        const data = await response.json();
        console.log(data);
        console.log("esto es dataaaaaaaaaaa")
        setData(data)
        
    }
    

    useEffect( () => {
        getInfo();
        isRequestReview();
        fetchApi();
        isClosed();
        checkComments();
        
    },[])
    

    
    const addCheck = e => {
        e.preventDefault();
        setError("no hay errores");
        
        let ioc = e.target.ioc.value;
        let description = e.target.description.value;
        setData([
            ...data,
            {
                ioc: ioc,
                description: description
            }
        ])
    }

    const [comments, setComments] = useState("");

    const checkComments = async () => {

        const response = await fetch(`http://localhost:3004/investigation/${id}/commented`);
        const data = await response.json();
        console.log("checkComments")
        console.log(data);
        setComments(data)

    }

    const sendComments = async e => {
        e.preventDefault();

        let comments = e.target.comments.value;

        const response = await fetch(`http://localhost:3004/investigation/${id}/update`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            body: JSON.stringify({
                comments: comments,
                id_analyst: user
            })
        });

        setComments(comments);
        
        
        console.log("Se envió a la db")
        console.log(user)

        e.target.comments.value = "";

        
    }

    const removeCheck = (ioc) => {
        //buscar por ioc y remover en el state. 
        console.log("ejecuté removeCheck")
        console.log("el ioc a borrar es "+ioc)
        console.log(data)
       // setData(data.filter(item => item.ioc !== ioc));
        console.log("data quedó así")
        console.log(data)
    }



    const close = async () => {

    
        const response = await fetch(`http://localhost:3004/investigation/${id}/update`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            body: JSON.stringify({
                closed: "1"
            })
        });
   
        setClosed(true)

    }


    const [error, setError] = useState("")
    const [investigation, setInvestigation] = useState([]);

    const getInfo = async () => {
        const response = await fetch(`http://localhost:3004/investigations/${user}/${id}`);
        const data = await response.json();
        console.log("aaaaaaaaaaaaaaaaaaasdasdasdasdassdasdsadasdasdasdasdasdsadsadadss")
        console.log(data)
        setInvestigation(data)
    }


   
    const description = () => {



        return (

            <Typography> 
                        {investigation > 0
                            ?   <Typography sx={{fontSize: "16px", m: 4}}> 
                                    {investigation[0].description} 
                                </Typography>
                            
                            : "undefined"}
            </Typography>
            )
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
            height: "150vh",
          }}>
            <Typography variant="h4" sx={{
        fontWeight: "bold",
        color: "#202980",
        marginTop:4,
        marginBottom:4
      }}> Investigación {id} </Typography>



      {closed ? "La investigación está cerrada" : 
      <Box sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          marginLeft: "70%", 
      }}> 

        {/*solo visible para el analista*/}
        {role == "investigador" ? "" : <Button type="submit" variant="outlined"> Validar</Button>}
        


        {comments.comment ? "" : 

            <Button onClick={requestReview} type="submit" variant="outlined" sx={{marginRight: "20px"}}> {requested === true ? "Req. para su revisión" : "Request review"}</Button>

        }
        <Button onClick={close} type="submit" variant="outlined"> Cerrar</Button>

      </Box>
      }




           

                {comments.comment 
                ? <Box sx={{color:"red"}}>{comments.comment} </Box> 
                :  
                role !== "investigador" 
                    ?
                    <form onSubmit={sendComments}>
                                    <Box sx={{
                                        margin: 3,
                                        border: 1,
                                        padding: 5,
                                        color: "red"
                                    }}> 
                                        <InputLabel> Comentarios de la investigación</InputLabel>
                                        <Input type="text" name="comments" ></Input>
                                        <Button type="submit" variant="text"> Enviar nota</Button>
                                        
                                    </Box>
                    </form> 
                    
                    : ""
                 }


                {/*description()*/}
                <p>Aca va la descripción</p>
         
            
            <form onSubmit={addCheck}>

                <Grid
                    container
                    direction="column"
                    justifyContent="left"
                    alignItems="center"
                    spacing={4}

                >
                    <Box sx={{ m: 3, display: "flex", flexDirection: "column" }}>

                        <FormControl sx={{marginTop:2}}>
                            <InputLabel htmlFor="firstname"> IOC </InputLabel>
                            <StyledInput type="text" name="ioc" />
                        </FormControl>

                        <FormControl sx={{marginTop:2}}>
                            <InputLabel htmlFor="firstname"> Descripción </InputLabel>
                            <StyledInput type="text" name="description" />
                        </FormControl>
                    </Box>
                    <Typography>{error ? error : ""} </Typography>
                    <Box>
                        <Button type="submit" variant="contained" color="primary"> Crear!</Button>
                    </Box>
                </Grid>
            </form>
            {console.log(data)}
            

            {data ? data.map((dato, i) => {
                
                return <Check key={i} value={dato} />
            }) : <h2>Cargando...</h2>}


        </Container>








    )
}

export default Analysis;