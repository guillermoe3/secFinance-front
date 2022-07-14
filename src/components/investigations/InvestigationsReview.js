import { useState, useEffect, isValidElement, useContext} from "react"
import { Typography, Box, Container } from "@mui/material"
import MUIDataTable from "mui-datatables";
import UserContext from "../../context/UserContext"
import {useNavigate} from "react-router-dom"



function InvestigationReview() {


    let navigate = useNavigate();


    const [list, setList] = useState([]);
    const [myreviews, setMyreviews] = useState([]);

    const {getUser} = useContext(UserContext);
    let user = getUser();

    const url = `http://localhost:3004/investigation/toreview`;
    

    const fetchApi = async () => {
        const response = await fetch(url);
        const data = await response.json();

       //dato.customer = dato.id_user
        const newData = data.map( (dato) => {
           
            dato.link = `investigation/${user.userId}/${dato.id_investigation}`
            
            console.log(dato);
            
        });

        //setList(data) dato.customer = "asdasd"
        setList(data)

        console.log(list)
    }

    const fetchApiMyReview = async () => {
        const response = await fetch(`http://localhost:3004/investigation/myreview/${user.userId}`);
        //console.log(user)
        //console.log(`http://localhost:3004/investigation/myreview/${user.userId}`)
        const data = await response.json();

        const newData = data.map( (dato) => {
            
            dato.link = `investigation/${user.userId}/${dato.id_investigation}`
           
        });

        setMyreviews(data);
    }


    useEffect(() => { 
        fetchApi()
        fetchApiMyReview();
     }, []
        );

        const options = {
                download: "false",
                print: "false",
                filter: "false",
                viewColumns : "false",
                selectableRows: "none",
                onRowClick: rowData => navigate(`/${rowData[3]}/analysis`)
                //rowData => console.log(rowData[3])
                //rowData => navigate(`${rowData.link}`, { replace: true })

            }
        
/*{
                name:"customer",
                label:"Cliente"
            }, */
        const columns = [
            {
                name:"id_investigation",
                label:"ID"
            },
            {
                name:"date_creation",
                label:"Fecha"
            },
            {
                name:"description",
                label:"Descripción"
            },
            
            
            {
                name:"link",
                label:"Link"   
            }
            
        ]

    return (
        <Container maxWidth="lg" sx={{
            marginTop: 1,
            border: "0.5px solid",
            padding: "10px",
            boxShadow: 5,
            backgroundColor: "white",
            borderColor: 'grey.200',
            borderRadius: 3,
            height: "200vh",
        }}> 
        <Box>
            <Typography variant="h5" sx={{
                fontWeight: "bold",
                color: "#202980",
                marginBottom: 4
            }}>Investigaciones a revisar</Typography>



                <MUIDataTable
                title={""}
                data={list}
                columns={columns}
                options={options}
                />

            <Typography variant="h5" sx={{
                fontWeight: "bold",
                color: "#202980",
                marginBottom: 4,
                marginTop: 4
            }}>Mis revisiones</Typography>

            <MUIDataTable
                title={""}
                data={myreviews}
                columns={columns}
                options={options}
                />
            
        </Box>
        </Container>
    )
}

export default InvestigationReview;