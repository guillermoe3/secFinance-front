
import SimpleBar from "../charts/SimpleBar"
import SimpleBar2 from "../charts/SimpleBar2"
import Pie from "../charts/Pie"
import Container from '@mui/material/Container'
import {Box, Typography} from '@mui/material/'
import Chart1 from "../charts/Chart1"
import BarChart from "../charts/BarChart"
import PieChart from "../charts/PieChart"
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

      const [typesPie, setTypesPie] = useState([]);

      const [valuesPie, setValuesPie] = useState([]);
  
      const getInfoPie = async () => {
          const response = await fetch("http://localhost:3004/analysis/piechart"); 
          const data = await response.json();
  
          setTypesPie(data.labels)
          setValuesPie(data.data) 
  
        }




    useEffect(async () => {

        getInfoBar();
        getInfoPie();
        
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
            height: "150vh"
          }}>

            
            <Typography variant="h4" sx={{
                    fontWeight: "bold",
                    color: "#202980",
                    marginBottom:4
                }}> Estadisticas</Typography>


                <Box sx={{m: 2}}>
                    
                    
                    
                </Box>
                
                <Typography variant="h6" sx={{
                    fontWeight: "bold",
                    color: "#202980",
                    marginBottom:4
                }}> Cantidad eventos por Riesgo</Typography>
                <Box  display="flex"
                        justifyContent="center"
                        alignItems="center" sx={{marginBottom:7}}>

                {/*labels={["Google", "Bing", "Otro", "Otro2"]} data2={[74,10,50,20]}*/}

                
                <PieChart labels={typesPie} data2={valuesPie}/>
                
                    
                </Box>


                <Typography variant="h6" sx={{
                    fontWeight: "bold",
                    color: "#202980",
                    marginBottom:4
                }}> Cantidad eventos por Analista</Typography>

                <BarChart labels={usersBar} data2={cantBar}/>

            </Container>


            
        </div>
    )
}

export default Home;