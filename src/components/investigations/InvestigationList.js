import { useState, useEffect, isValidElement } from "react"
import { Typography, Box } from "@mui/material"
import MUIDataTable from "mui-datatables";

//Table, TableBody, TableCell, TableContainer, TableHead, TableRow
/*             
            
            
            
            
            
 <ul>

                {list ? list.map((inv) => <ul key={inv.id_investigation}>

                    <li>
                        Fecha de creación: {inv.date_creation}
                    </li>
                    <li>Descripción: {inv.description}
                    </li>


                </ul>) : "No hay datos"}


            </ul>
           
            
            
            
            
            */

function InvestigationList() {

    const [list, setList] = useState([]);

    const url = "http://localhost:3004/investigations";

    const fetchApi = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setList(data);
        console.log(data)
    }
    useEffect(() => { 
        fetchApi() }, [])


        const options = {
                download: "false",
                print: "false",
                filter: "false",
                viewColumns : "false",
                selectableRows: "none"
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