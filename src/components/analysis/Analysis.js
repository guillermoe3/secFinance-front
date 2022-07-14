import Button from '@mui/material/Button';
import { FormControl, Input, InputLabel, FormHelperText, TextField, Container, Grid, Box, styled, Typography} from '@mui/material';
import { useState, useEffect, useContext} from "react"
import Check from "./Check"
import CheckStatic from "./CheckStatic"
import {useParams } from 'react-router-dom';
import UserContext from "../../context/UserContext"
import Description from "./Description"


const StyledInput = styled(Input)({
    width: "40vh",
});

const StyledTypography = styled(Typography)({
    fontSize: "12px",
    color: "#202980",
    fontWeight: '300'
});

function Analysis() {

    const [closed, setClosed] = useState(false)

    const isClosed = async () => {

        const response = await fetch(`http://localhost:3004/investigation/${id}/closed`)
        const data = await response.json()
        setClosed(data)

    }

    const [requested, setRequested] = useState(false)
    const [stats, setStats] = useState({});

    const getStats = async () => {
        const response = await fetch (`http://localhost:3004/investigation/statistics/${id}`)
        const data = await response.json();
        setStats(data)
        console.log("esto es getStats")
        console.log(data)
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

        //getMoreInformation Inv
   
        setRequested(true)
        

    }

 
    const isRequestReview = async () => {
        const response = await fetch(`http://localhost:3004/investigation/${id}/requested`)
        console.log(`http://localhost:3004/investigation/${id}/requested`)
        const data = await response.json()
        setRequested(data)

    }

    const [validated, setValidated] = useState(false)

    const isValidated = async () => {

        const response = await fetch(`http://localhost:3004/investigation/${id}/validated`)
        const data = await response.json()
        setValidated(data)

    }

    const validate = async () => {
        //validar inv. 
        //remove request inv
        //actualizar estado review
        const response = await fetch(`http://localhost:3004/investigation/${id}/update`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            body: JSON.stringify({
                validated: "1",
                review: "0",
                id_analyst: user ? user : 0
            })
        });

        
   
        setValidated(true)
    }

    const [data, setData] = useState([])

    const {getUser, isLogged, logout, getRole} = useContext(UserContext);
    let userLogged = getUser();
    let role = getRole();

    let {id, user} = useParams();
    console.log("user es "+ user + " y el id es "+id)


    const [previousData, setPreviousData] = useState([]);

    //obtengo todos los analysis de la investigación.
    const fetchApi = async () => {
        const response = await fetch(`http://localhost:3004/analysis/${id}`);
        const data = await response.json();
        console.log(data);
        console.log("esto es dataaaaaaaaaaa")
        //setData(data)
        setPreviousData(data);
        
    }
    

    useEffect( () => {
        getInfo();
        isRequestReview();
        isValidated();
        fetchApi();
        isClosed();
        checkComments();
        getStats();
        
    },[])
    

    //#region "data validation"


    const tipo = (ioc) => {
        
        if (isValidIP(ioc) == true){ 
          return "ip"
        } else {
          if (isValidUrl(ioc) == true){
            return "url"
  
          } else if (isValidDomain(ioc) == true) {
            return "domain"
          } else if (isValidHash(ioc) == true){
            return "hash"
          } else return "error"
          
        }
      }

      function isValidIP(ipaddress) {  
        if (/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {  
          return (true)  
        }   
        return (false) } 
      

        function isValidDomain(domain) {  
          if (/^(?:(?:(?:[a-zA-z\-]+)\:\/{1,3})?(?:[a-zA-Z0-9])(?:[a-zA-Z0-9\-\.]){1,61}(?:\.[a-zA-Z]{2,})+|\[(?:(?:(?:[a-fA-F0-9]){1,4})(?::(?:[a-fA-F0-9]){1,4}){7}|::1|::)\]|(?:(?:[0-9]{1,3})(?:\.[0-9]{1,3}){3}))(?:\:[0-9]{1,5})?$/.test(domain)) {  
            return (true)  
          }   
          return (false) } 
  
         
          function isValidUrl(url) {  
            if (/^(http|https)?:\/\/?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g.test(url)) {  
              return (true)  
            }   
            return (false) }
  
            function isValidHash(hash) {  
              if (/^[a-f0-9]{64}$/gi.test(hash)) {  
                return (true)  
              }   
              return (false) }


    ////#endregion


    
    const addCheck = e => {
        e.preventDefault();
        setError("");
        
        let ioc = e.target.ioc.value;
        let description = e.target.description.value;

        if (tipo(ioc) == "error"){ 
            setError("El IOC ingresado es invalido. Intente nuevamente.");
        } else {

            setData([
                ...data,
                {
                    ioc: ioc,
                    description: description
                }
            ])
            console.log("esto es data de addCheck")
            console.log(data)

        }
        
    }

    const [comments, setComments] = useState("");

    const checkComments = async () => {

        const response = await fetch(`http://localhost:3004/investigation/${id}/commented`);
        const data = await response.json();
        //console.log("checkComments")
        //console.log(data);
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

        getStats();
        console.log("sendComments")
        console.log(stats)

        setComments(comments);
        
        
        
        //console.log("Se envió a la db")
        //console.log(user)

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
        console.log("getInfo data")
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



      {closed ? <Typography sx={{fontStyle: 'italic'}}>La investigación está cerrada</Typography> : 
      <Box sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          marginLeft: "70%", 
      }}> 

        {/*solo visible para el analista*/}
        {role == "investigador" 
        ? "" 
        : 
            validated === false ? <Button onClick={validate} type="submit" variant="outlined"> Validar</Button>
            : "Investigación ya validada"
            
                }
        


        {comments.comment ? "" : 

            <Button onClick={requestReview} type="submit" variant="outlined" sx={{marginRight: "20px"}}> {requested === true ? "Req. para su revisión" : "Request review"}</Button>

        }
        <Button onClick={close} type="submit" variant="outlined"> Cerrar</Button>

      </Box>
      }




           

            <Box sx={{display:"flex", 
                    flexDirection:"row",
                    boxShadow: 1, 
                    m:2}}>
                {comments.comment 
                ? <Box sx={{color:"red", width: "60%", m:1}}>Evaluación del analista: {comments.comment} </Box> 
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

                 {stats.totalCount ? 
                    <Box sx={{color: "red", m:1, width: "40%"}}> 
                        <StyledTypography> Total de elementos buscados: {stats.totalCount} </StyledTypography> 
                        <StyledTypography> Total de elementos maliciosos detectados: {stats.maliciousCount} </StyledTypography> 
                        <StyledTypography> Porcentaje de posible amenaza: {stats.percentThreat} </StyledTypography> 
                        <StyledTypography noWrap> Elemento con peor reputación buscado: {stats.mostVotedMalicious} </StyledTypography> 
                        <StyledTypography> Cantidad de valuaciones del elemento: {stats.cantMalicious} </StyledTypography> 
                    
                    </Box> 

                        : ""}

            </Box>
                {/*description()*/}
                <Typography sx={{fontStyle: 'italic'}}>Descripción de la investigación</Typography>
         
            
            {closed ? "" : 
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
                        <Typography sx={{color:"red", fontSize: "12px", m:3}}>{error ? error : ""} </Typography>
                        <Box>
                            <Button type="submit" variant="contained" color="primary"> Crear!</Button>
                        </Box>
                    </Grid>
                </form>
            }
            
            

{/** <CheckStatic value={dato}/> 
 *  {previousData ? previousData.map((dato, i) => {
                
                return <CheckStatic value={dato}/> 
            }) : <h2>Cargando...</h2>}
   */}

{/** <Check key={i} value={dato} />    */}
                
            {data ? data.map((dato, i) => {
                console.log(dato)

                return <Check key={i} value={dato} />
            }) : <h2>Cargando...</h2>}


            {previousData ? previousData.map((dato, i) => {
                
                return <CheckStatic value={dato}/> 
            }) : <h2>Cargando...</h2>}

            
           


            

        </Container>








    )
}

export default Analysis;