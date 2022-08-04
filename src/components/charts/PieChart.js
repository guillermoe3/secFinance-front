
import React from 'react'
import {Pie} from "react-chartjs-2"

const PieChart = ({labels, data2}) => {


    try {

        console.log(labels)
        console.log(data2)
        
    } catch (error) {
        console.log(error)
        
    }

    const data = {
        labels:labels,
        datasets:[
            {
                data:data2,
                backgroundColor: ["#4154FF", "#021bfa", "#2a2f5e", "#808cff"]
            
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
