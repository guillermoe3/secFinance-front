import { useState, useEffect, isValidElement } from "react"
import { Typography, Box } from "@mui/material"

/*             
            
            
            
            
            
                       {list ? list.map((inv, i) => 
                
                <Box sx={{display:"flex",
                justifyContent: 'space-between', 
                alignItems: 'center', width: "30vw"}}>
                    <Typography variant="h5">{inv[i].date_creation ? inv[i].date_creation : "null" }</Typography>
                    <Typography variant="h5">{inv[i].description ? inv[i].description : "null"}</Typography>
                </Box>
                
                ): "No hay datos"}
           
            
            
            
            
            */

function InvestigationList() {

    const [list, setList] = useState("");

    const url = "http://localhost:3004/investigations";

    const fetchApi = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setList(data);
        console.log(data)
    }
    useEffect(() => { 
        fetchApi() }, [])





    return (
        <div>
            <Typography variant="h5" sx={{
                fontWeight: "bold",
                color: "#202980",
                marginBottom: 4
            }}>Mis investigaciones</Typography>
            {console.log(list)}

            <ul>

                {list ? list.map((inv) => <ul key={inv.id_investigation}>

                    <li>
                        Fecha de creación: {inv.date_creation}
                    </li>
                    <li>Descripción: {inv.description}
                    </li>


                </ul>) : "No hay datos"}


            </ul>


        </div>
    )
}

export default InvestigationList;