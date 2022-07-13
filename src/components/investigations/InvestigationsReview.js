import { useState, useEffect, isValidElement, useContext} from "react"
import { Typography, Box } from "@mui/material"
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

        const newData = data.map( (dato) => {
            //console.log(dato);
            dato.link = `investigation/${user.userId}/${dato.id_investigation}`
        });

        setList(data);
    }

    const fetchApiMyReview = async () => {
        const response = await fetch(`http://localhost:3004/investigation/myreview/${user.userId}`);
        //console.log(user)
        //console.log(`http://localhost:3004/investigation/myreview/${user.userId}`)
        const data = await response.json();

        const newData = data.map( (dato) => {
            //console.log(dato);
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
                marginBottom: 4
            }}>Mis revisiones</Typography>

            <MUIDataTable
                title={""}
                data={myreviews}
                columns={columns}
                options={options}
                />
            
        </Box>
    )
}

export default InvestigationReview;