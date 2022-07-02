import { useState, useEffect, isValidElement, useContext} from "react"
import { Typography, Box } from "@mui/material"
import MUIDataTable from "mui-datatables";
import UserContext from "../../context/UserContext"
import {useNavigate} from "react-router-dom"



function InvestigationList() {


    let navigate = useNavigate();


    const [list, setList] = useState([]);

    const {getUser} = useContext(UserContext);
    let user = getUser();
    console.log(user.userId)

    const url = `http://localhost:3004/investigations/${user.userId}`;
    console.log(url)

    const fetchApi = async () => {
        const response = await fetch(url);
        const data = await response.json();

        //console.log(data)
       const newData = data.map( (dato) => {
            console.log(dato);
           /* dato = {
                ...dato,
                asd: "asd" 
                
            }*/

            dato.link = `investigation/${user.userId}/${dato.id_investigation}`
            

        });
        console.log("new data")
        console.log(newData)

        setList(data);
       // console.log(data)
    }
    useEffect(() => { 
        fetchApi() }, []
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
            }}>Mis investigaciones</Typography>



                <MUIDataTable
                title={""}
                data={list}
                columns={columns}
                options={options}
                />
            
        </Box>
    )
}

export default InvestigationList;