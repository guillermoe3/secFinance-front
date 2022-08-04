
import React from 'react'
import {Pie} from "react-chartjs-2"

const PieChart = () => {

    const data = {
        labels:["Google", "Bing", "Otro", "Otro2"],
        datasets:[
            {
                data:[74,10,50,20],
                backgroundColor: ["green", "blue", "black", "yellow"]
            
            }
        ]
    };

    const opciones = {
        
    }


    return (
        <div style={{width:'500px'}}>
            <Pie data={data} options={opciones}/>
            
        </div>
    )
}

export default PieChart
