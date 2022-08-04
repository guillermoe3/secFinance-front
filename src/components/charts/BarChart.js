import Chart from 'chart.js/auto';

import React from 'react'

import {Bar} from "react-chartjs-2"

const BarChart = ({labels, data2}) => {

    console.log(typeof(labels))
    console.log(typeof(data2))

    let dLabels;
    let dData2;

    try {
        dLabels = Object.values(labels)
 

        dData2 = Object.values(data2)
 


        
    } catch (error) {
        console.log(error)
    }

    const data ={
        labels: dLabels,
        datasets: [{
            label:"Investigaciones por Analista",
            backgroundColor: '#4154FF',
            borderColor: 'black',
            borderWidth: 2,
            hoverBackgroundColor: 'rgba(65,84,255,0.7)',
            hoverBorderColor: 'black',
            data: dData2

        }]
    }

   // console.log("esto es data")
    //console.log(data)

    const opciones = {
        maintainAspectRatio: false,
        responsive: true
    }
    return (


        <div style={{height:'500px',width:'100%'}}>
            
            <Bar data={data} options={opciones} />
            
        </div>
    )
}

export default BarChart
