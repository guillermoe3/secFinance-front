import { Box, Container, Typography } from "@mui/material"

import { Link } from "react-router-dom"
import InvestigationList from "../investigations/InvestigationList"

import {useState, useContext, useEffect} from "react"
import UserContext from "../../context/UserContext"
import {useNavigate} from "react-router-dom"




function Business() {

    const {getUser} = useContext(UserContext);
    let user = getUser();

   
    
    const [business, setBusiness] = useState("");

    const getBusinessName = async () => {
        const response = await fetch(`http://localhost:3004/business/${user.id_business}`);
        const data = await response.json();
        //console.log(data)
        setBusiness(data)

    }

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch(`http://localhost:3004/users/business/${user.id_business}`);
        const data = await response.json();
        console.log(data)
        setUsers(data)
        
    }

    useEffect(() => {
        getBusinessName();
        getUsers();
        //console.log(user)
        console.log(user.id_business)
        console.log(business)
    },[])

    

    /*                <ul>{users.map((user, i) => 
                            <li key={i}>
                            {users[i].nombre} Cantidad: {users[i].cantidad}
                            </li>)}
                    </ul> */


    return (
        <Container maxWidth="lg" sx={{ 
        marginTop: 1,
        border: "0.5px solid",
        padding: "10px",
        boxShadow: 5, 
        backgroundColor: "white", 
        borderColor: 'grey.200',
        borderRadius: 3
      }}>

<Typography variant="h4" sx={{
        fontWeight: "bold",
        color: "#202980",
        marginBottom:4
      }}> Mis compañeros de {business ? business[0].name : "mi empresa"}</Typography>
            <Box sx={{
                width: "40vw",
                marginBottom: "5vh"
            }}>


                <Box sx={{
                    display: "flex",
                    justifyContent: 'space-between',
                    alignItems: 'center', width: "30vw", marginBottom: "5vh"
                }}>
                    <Typography variant="h6">Nombre</Typography>
                    <Typography variant="h6" sx={{ marginLeft: 20 }}>Email</Typography>
                </Box>

                {users ? 
                    users.map((user) =>

                        <Box sx={{
                            display:"flex", 
                            flexDirection:"row", 
                            m: 2, 
                            width: "100%"
                            
                        }}>
                            <Typography sx={{width: "40%",marginRight: 5}}>{user.name}</Typography>
                            <Typography sx={{}}><Link to="/">{user.email}</Link></Typography>
                        </Box>

                ) : ""}


            </Box>



            <Box>
               

                <InvestigationList />



            </Box>

        </Container>


    )
}
export default Business;