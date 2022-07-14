import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import {useState, useEffect} from "react"



/*
const data = [
  { analista: 'Analista1', cantidad: 2.525 },
  { analista: 'Analista2', cantidad: 3.018 },
  { analista: 'Analista3', cantidad: 3.682 },
  { analista: 'Analista4', cantidad: 4.440 },
  { analista: 'Analista5', cantidad: 5.310 },
  { analista: 'Analista6', cantidad: 6.127 },
  { analista: 'Analista7', cantidad: 6.930 },
];*/

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data : "",
    };
  }

  apiCall(url, handler ){
    fetch(url)
      .then(response => response.json())
        .then(data => handler(data))
        .catch( error => console.log(error))
  }

  componentDidMount () {
    console.log("component mounted")
    this.apiCall("http://localhost:3004/users/stats", this.setData)
  }

  setData = (data) => {
    console.log("este es el data de setData")
    console.log(data)
    this.setState({
      data:data
    })

  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries
            valueField="cantidad"
            argumentField="analista"
          />
          <Title text="Cantidad de investigaciones por analistas" />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
