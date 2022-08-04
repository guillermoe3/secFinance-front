import Chart from 'chart.js/auto';

import React from 'react'



import {Bar} from "react-chartjs-2"

const Chart1 = () => {

    const data ={
        labels: ["USA", "Mexico", "Arg", "Uru"],
        datasets: [{
            label:"habitantes",
            backgroundColor: 'rgba(0,255,0,1)',
            borderColor: 'black',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(0,255,0,0.2)',
            hoverBorderColor: '#FF0000',
            data: [322, 70, 48, 2]

        }]
    }

    const opciones = {
        maintainAspectRatio: false,
        responsive: true
    }
    return (


        <div style={{height:'500px',width:'100%'}}>
            <h2>Población por Pais</h2>
            <Bar data={data} options={opciones} />
            
        </div>
    )
}

export default Chart1
