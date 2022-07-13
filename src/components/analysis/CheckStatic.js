import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import {useState, useEffect} from "react"
import {Typography} from "@mui/material"
import {Link, useParams} from "react-router-dom"




function CheckStatic({value}) {

  /*
                     <Box sx={{width: "30%", p:1}}>
                  <Typography sx={{fontWeight: '400', fontSize: "16px", color: "#0b1566"}}> 
                      Objetos Relacionados </Typography> {related ? related.map(dato => 
                      <Box sx={{display:"flex", 
                               margin:0}}><Typography sx={{marginRight: 1}}>{dato.ioc}</Typography> 
                               <Link to="/test">Add</Link>
                    </Box>) : ""}
                  </Box>

  */ 


              
        //console.log(JSON.parse(value.result.harmless))
        let results = "";
    if (value.result){
       results = JSON.parse(value.result)
      }

    //console.log(results.harmless)
    return (
        <Container maxWidth="lg">
              
            <Box sx={{ 
                  p: 1.3, 
                  m: 3, 
                  border: '0.5px dashed grey', 
                  boxShadow: "0 5px 10px 0 rgba(0, 0, 0, 0.3)", 
                  display: "flex", 
                  flexDirection: "row", 
                  fontSize: "13px", 
                  color: "gray"}} >

                  <Box sx={{width: "45%", p: 1}}>
                    <Box sx={{marginBottom:1}}> <Typography sx={{fontWeight: '400', fontSize: "16px", color: "#0b1566"}}>IOC </Typography> <Typography sx={{fontSize: "15px"}} noWrap> {value.ioc} </Typography></Box>
                    <Box> <Typography sx={{fontWeight: '400', fontSize: "16px", color: "#0b1566"}}>Descripción</Typography> {value.description} </Box>
                  </Box>
                  <Box sx={{width: "20%"}}>
                    <Box sx={{p:1}}><Typography sx={{fontWeight: '400', fontSize: "16px", color: "#0b1566"}}> Resultados </Typography> 
                    
                    {value ? 

                        <Box> 

                          <Box sx={{display:"flex"}}> 
                              <Typography sx={{fontSize:"13px"}}> No Malicioso: </Typography>{results.harmless 
                              ? 
                                <Typography sx={{color: "green", fontSize:"14px"}}> {results.harmless} </Typography>
                              : 
                                <Typography sx={{fontSize:"14px"}}>{results.harmless}</Typography> } 
                              
                            </Box>
                          <Box sx={{display:"flex"}}>  <Typography sx={{fontSize:"13px"}}>Malicioso: </Typography> {results.malicious 
                          ? 
                          <Typography sx={{color: "red", fontSize:"14px"}}>{results.malicious} </Typography>
                          : 
                          <Typography sx={{fontSize:"14px"}}>{results.malicious}</Typography> } 
                          </Box>

                          <Box sx={{display:"flex"}}> 
                          <Typography sx={{fontSize:"13px"}}> Sospechoso:</Typography> {results.suspicious 
                          ? 
                            <Typography sx={{color: "#fca503", fontSize:"14px"}}>{results.suspicious} </Typography>
                          : 
                            <Typography sx={{fontSize:"14px"}}>{results.suspicious} </Typography>
                          
                          } 
                          
                          </Box>
                          <Box> No detectado: {results.undetected} </Box>
                        </Box>
                    : "Cargando..."}
                      </Box>
                  </Box>

 
                  <Box textAlign="right" sx={{alignSelf: 'flex-end'}}>
                        <Button variant="text" color="secondary">
                            Delete
                        </Button>
                  </Box>
            </Box>
        </Container>

    )
}

export default CheckStatic;