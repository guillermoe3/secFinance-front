import AlertItem from "./AlertItem"
import {Box, Container} from "@mui/material"
import {useState, useContext, useEffect} from "react"
import UserContext from "../../context/UserContext"


function AlertList (){

    const [list, setList] = useState([]);


    const {getUser} = useContext(UserContext);

    let user = getUser();

    //obtener el id de la empresa

    let id_business = user.id_business;
    console.log(user.id_business)

    //mostrar por ID business

    const getAlertsById = async () => {
        const response = await fetch(`http://localhost:3004/alerts/business/${id_business}`);
        const data = await response.json();
        console.log(data)
        setList(data);

    }

    //Si es admin o analista mostrar todo
    

    useEffect(() => {
        getAlertsById();
        
    }, [])


    return(

        <Box> 
            {list ? 
                list.map ((dato) => 
                

                <AlertItem idAlert={dato.id_alerta} category={dato.category} risk={dato.severity} title={dato.titulo} resume="Descripción de la alerta" body1={dato.body1} body2={dato.body2} />
                
                )
                : ""
            
            }


            
        </Box>
        
         
        )
        
   
}

export default AlertList