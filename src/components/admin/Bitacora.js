import React from 'react'
import MUIDataTable from "mui-datatables";
import Container from '@mui/material/Container'
import {useState, useEffect} from "react"

const Bitacora = () => {

    

    const columns = [
        {
            name:"id",
            label:"ID"
        },
        {
            name:"date",
            label:"Fecha"
        },
        {
            name:"severity",
            label:"Criticidad"
        },
        {
            name:"event",
            label:"Evento"
        },
        {
            name:"userEmail",
            label:"Usuario", 
            options : {
                filter:true,
            }
        },
    ]

   

    
    const options = {}

    const [events, setEvents] = useState([])

    const fetchEvent = async () => {
       const response = await fetch("http://localhost:3004/events", {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
    })
    
        const data = await response.json();
        setEvents(data);
        console.log(data)
    
    }

    useEffect(() => {

        fetchEvent();
        

    }, [])


    return (

        <Container maxWidth="lg" sx={{ 
            marginTop: 1,
            border: "0.5px solid",
            padding: "10px",
            boxShadow: 5, 
            backgroundColor: "white", 
            borderColor: 'grey.200',
            borderRadius: 3, 
            height: "100%",
        }}>

                <MUIDataTable
                title={"Bitacora"}
                data={events}
                columns={columns}
                options={options}/>
          
        </Container>

    )
}

export default Bitacora
