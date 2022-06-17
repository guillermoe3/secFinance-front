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

const data2 = [
  { year: '1950', population: 2.525 },
  { year: '1960', population: 3.018 },
  { year: '1970', population: 3.682 },
  { year: '1980', population: 4.440 },
  { year: '1990', population: 5.310 },
  { year: '2000', population: 6.127 },
  { year: '2010', population: 6.930 },
];

const data = [
  { analista: 'Analista1', cantidad: 2.525 },
  { analista: 'Analista2', cantidad: 3.018 },
  { analista: 'Analista3', cantidad: 3.682 },
  { analista: 'Analista4', cantidad: 4.440 },
  { analista: 'Analista5', cantidad: 5.310 },
  { analista: 'Analista6', cantidad: 6.127 },
  { analista: 'Analista7', cantidad: 6.930 },
];

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
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
