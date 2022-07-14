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
  { analista: 'Banco Macro', cantidad: 94 },
  { analista: 'Banco Galicia', cantidad: 54 },
  { analista: 'Ualá', cantidad: 72 },
  { analista: 'Ripio', cantidad: 55 },
  { analista: 'BCRA', cantidad: 80 },
  
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
          <Title text="Cantidad de investigaciones por Empresa" />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
