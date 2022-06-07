import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import {useState, useEffect} from "react"



function Check({ value }) {

    const [analysis, setAnalysis] = useState("");

    const url = "http://localhost:3004/analysis";

    const body = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: 'domain',
            ioc: value.ioc, 
            description: value.description
          })
    }

    function isValidIP(ipaddress) {  
      if (/^(25[0-5]|2[0-4][0-9]|[1]?[1-9][1-9]?)\.(25[0-5]|2[0-4][0-9]|[1]?[1-9][1-9]?)\.(25[0-5]|2[0-4][0-9]|[1]?[1-9][1-9]?)\.(25[0-5]|2[0-4][0-9]|[1]?[1-9][1-9]?)$/.test(ipaddress)) {  
        return (true)  
      }   
      return (false) } 
    
      console.log("Es una IP? "+ isValidIP("asd"))

      function isValidDomain(domain) {  
        if (/^(?:(?:(?:[a-zA-z\-]+)\:\/{1,3})?(?:[a-zA-Z0-9])(?:[a-zA-Z0-9\-\.]){1,61}(?:\.[a-zA-Z]{2,})+|\[(?:(?:(?:[a-fA-F0-9]){1,4})(?::(?:[a-fA-F0-9]){1,4}){7}|::1|::)\]|(?:(?:[0-9]{1,3})(?:\.[0-9]{1,3}){3}))(?:\:[0-9]{1,5})?$/.test(domain)) {  
          return (true)  
        }   
        return (false) } 

        console.log("Es un dominio? "+ isValidDomain("192.123.45.2"))

      



    const fetchApi = async () => {
      const response = await fetch(url, body);
      const data = await response.json();
      console.log(data);
      setAnalysis(data);
      
    }

    useEffect(() => {
        fetchApi()
    },[])
    
    /*
    fetch('https://mywebsite.com/endpoint/', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  })
}) 

 <ul>
                { analysis.result.map(resut => <li> {result}</li>)
           } </ul>


            type: 'domain',
            ioc: 'www.resop.co.jp', 
            description:'desde front 4-jun-22'

                                
              
            
    */




    return (
        <Container maxWidth="lg">
          
        <Box sx={{ p: 3, 
        m: 3, 
        border: '0.5px dashed grey', 
        boxShadow: "0 5px 10px 0 rgba(0, 0, 0, 0.3)"}} >
            <div>aca</div>
            <Box> IOC: {value.ioc} </Box>
            <Box> Descripción: {value.description} </Box>
            <Box> Result: {analysis ? 

                <Box> 

                  <Box> Harmless: {analysis.result.harmless} </Box>
                  <Box> Malicious: {analysis.result.malicious} </Box>
                  <Box> Suspicious: {analysis.result.suspicious} </Box>
                  <Box> Undetected: {analysis.result.undetected} </Box>

                </Box>

            
            
            
            : "Cargando..."}</Box>

            <Box textAlign="right">
                <Button variant="text" color="secondary">
                    Edit
                </Button>
                <Button variant="text" color="secondary">
                    Delete
                </Button>
            </Box>
        </Box>
        </Container>

    )
}

export default Check;