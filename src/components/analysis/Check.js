import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import {useState, useEffect} from "react"
import {Typography} from "@mui/material"
import {Link} from "react-router-dom"



function Check({ value, removeCheck}) {

    const [analysis, setAnalysis] = useState("");
    const [related, setRelated] = useState("");

    const tipo = () => {
      console.log(value.ioc)
      if (isValidIP(value.ioc) == true){ 
        console.log("Es una IP")
        return "ip"
      } else {
        if (isValidUrl(value.ioc) == true){
          console.log("es una url")
          return "url"

        } else if (isValidDomain(value.ioc) == true) {
          console.log("Es un dominio")
          return "domain"
        } else if (isValidHash(value.ioc) == true){
          console.log("Es un hash")
          return "hash"
        } else console.log("error")
        
      }
    }


    //old expression /^(25[0-5]|2[0-4][0-9]|[1]?[1-9][1-9]?)\.(25[0-5]|2[0-4][0-9]|[1]?[1-9][1-9]?)\.(25[0-5]|2[0-4][0-9]|[1]?[1-9][1-9]?)\.(25[0-5]|2[0-4][0-9]|[1]?[1-9][1-9]?)$/
    function isValidIP(ipaddress) {  
      if (/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {  
        return (true)  
      }   
      return (false) } 
    
        //console.log("Es una IP? "+ isValidIP("45.1.37.102"))

        //domain probar /(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
      function isValidDomain(domain) {  
        if (/^(?:(?:(?:[a-zA-z\-]+)\:\/{1,3})?(?:[a-zA-Z0-9])(?:[a-zA-Z0-9\-\.]){1,61}(?:\.[a-zA-Z]{2,})+|\[(?:(?:(?:[a-fA-F0-9]){1,4})(?::(?:[a-fA-F0-9]){1,4}){7}|::1|::)\]|(?:(?:[0-9]{1,3})(?:\.[0-9]{1,3}){3}))(?:\:[0-9]{1,5})?$/.test(domain)) {  
          return (true)  
        }   
        return (false) } 

        //console.log("Es un dominio? "+ isValidDomain("http://soheylistore.ir/"))

        //valid url ^(http|https)?:\/\/?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)
        function isValidUrl(url) {  
          if (/^(http|https)?:\/\/?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g.test(url)) {  
            return (true)  
          }   
          return (false) }

          //console.log("Es una url? "+ isValidUrl("google.com"))

          function isValidHash(hash) {  
            if (/^[a-f0-9]{64}$/gi.test(hash)) {  
              return (true)  
            }   
            return (false) }

            //console.log("Es un hash? "+ isValidHash("11160be4b95b6d30da355a0c124af82b35000bce8f24f957d1c09ead47544a1e"))

          



    const fetchRelatedObject = async () => {
      const response = await fetch("http://localhost:3004/analysis/related",{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: tipo(),
            ioc: value.ioc, 
            description: value.description
          })
    }); 
      const data = await response.json();
      setRelated(data)
      console.log(data)
    }



    const url = "http://localhost:3004/analysis";
    const body = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id_investigador: 28,
            type: tipo(),
            ioc: value.ioc, 
            description: value.description
          })
    }


    //isInDB

    const [from, setFrom] = useState("API")
   
    const checkFrom = async () => {

      console.log("checkFrom")

      const response = await fetch("http://localhost:3004/analysis/isindb", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ioc: value.ioc, 
          })})
          console.log(response)

          const data = await response.json();
          console.log("esto es data desde checkFrom")
          console.log(data)
          

          if (data !== 400){
            console.log("entró al if de data")
            setFrom("DB")
            console.log("data desde DB")
            console.log(data)
            setAnalysis(data);
          } else {
            console.log("Entro al else")
            fetchApi();
          }
          
          //return data;

    }
    
    const fetchApi = async () => {
      const response = await fetch(url, body);
      const data = await response.json();
      console.log("data desde fetchAPI")
      console.log(data);
      setAnalysis(data);
      
    }

    useEffect(async () => {
        //fetchRelatedObject();
        checkFrom();
        
        
    },[])

    const remove = (ioc) => {
      removeCheck(ioc);
    }
    
   
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
                    <Box sx={{marginBottom:1}}> <Typography sx={{fontWeight: '400', fontSize: "16px", color: "#0b1566"}}>IOC (from {from}) </Typography> <Typography sx={{fontSize: "15px"}} noWrap> {value.ioc} </Typography></Box>
                    <Box> <Typography sx={{fontWeight: '400', fontSize: "16px", color: "#0b1566"}}>Descripción</Typography> {value.description} </Box>
                  </Box>
                  <Box sx={{width: "20%"}}>
                    <Box sx={{p:1}}><Typography sx={{fontWeight: '400', fontSize: "16px", color: "#0b1566"}}> Resultados </Typography> 
                    
                    {analysis ? 

                        <Box> 

                          <Box sx={{display:"flex"}}> 
                              <Typography sx={{fontSize:"13px"}}> No Malicioso: </Typography>{analysis.result.harmless 
                              ? 
                                <Typography sx={{color: "green", fontSize:"14px"}}> {analysis.result.harmless} </Typography>
                              : 
                                <Typography sx={{fontSize:"14px"}}>{analysis.result.harmless}</Typography> } 
                              
                            </Box>
                          <Box sx={{display:"flex"}}>  <Typography sx={{fontSize:"13px"}}>Malicioso: </Typography> {analysis.result.malicious 
                          ? 
                          <Typography sx={{color: "red", fontSize:"14px"}}>{analysis.result.malicious} </Typography>
                          : 
                          <Typography sx={{fontSize:"14px"}}>{analysis.result.malicious}</Typography> } 
                          </Box>

                          <Box sx={{display:"flex"}}> 
                          <Typography sx={{fontSize:"13px"}}> Sospechoso:</Typography> {analysis.result.suspicious 
                          ? 
                            <Typography sx={{color: "yellow", fontSize:"14px"}}>{analysis.result.suspicious} </Typography>
                          : 
                            <Typography sx={{fontSize:"14px"}}>{analysis.result.suspicious} </Typography>
                          
                          } 
                          
                          </Box>
                          <Box> No detectado: {analysis.result.undetected} </Box>
                        </Box>
                    : "Cargando..."}
                      </Box>
                  </Box>

                  <Box sx={{width: "30%", p:1}}>
                  <Typography sx={{fontWeight: '400', fontSize: "16px", color: "#0b1566"}}> 
                      Objetos Relacionados </Typography> {related ? related.map(dato => 
                      <Box sx={{display:"flex", 
                               margin:0}}><Typography sx={{marginRight: 1}}>{dato.ioc}</Typography> 
                               <Link to="/test">Add</Link>
                    </Box>) : ""}
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

export default Check;