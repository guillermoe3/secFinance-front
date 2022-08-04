
import SimpleBar from "../charts/SimpleBar"
import SimpleBar2 from "../charts/SimpleBar2"
import Pie from "../charts/Pie"
import Container from '@mui/material/Container'
import {Box, Typography} from '@mui/material/'
import Chart1 from "../charts/Chart1"
import BarChart from "../charts/BarChart"
import {useEffect, useState} from "react"


//<Container maxWidth="md" sx={{marginBottom: "10vh"}}>
function Home() {




    const [usersBar, setUsersBar] = useState([]);

    const [cantBar, setCantBar] = useState([]);

    const getInfoBar = async () => {
        const response = await fetch("http://localhost:3004/investigations/barChart"); 
        const data = await response.json();

        setCantBar(data.cant)
        setUsersBar(data.users2) 

      }




    useEffect(async () => {

        getInfoBar();
        
    },[])
   

    return (

        <div>
            <Container maxWidth="lg" sx={{ 
            marginTop: 1,
            border: "0.5px solid",
            padding: "10px",
            boxShadow: 5, 
            backgroundColor: "white", 
            borderColor: 'grey.200',
            borderRadius: 3, 
            marginBottom: "10vh",
            height: "100vh"
          }}>

            
            <Typography variant="h4" sx={{
                    fontWeight: "bold",
                    color: "#202980",
                    marginBottom:4
                }}> Estadisticas</Typography>


                <Box sx={{m: 2}}>
                    
                    
                    
                </Box>
                
                <Box sx={{m: 2}}>

                   
                    
                </Box>

               

                {/*labels={["USA", "Mexico", "Arg", "Uru", "5to"]} data2={[322, 70, 48, 2]}*/}
                

                <BarChart labels={usersBar} data2={cantBar}/>
                
                
               




                


            </Container>


            
        </div>
    )
}

export default Home;