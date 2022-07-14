import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { type: 'Malicious', cant: 20 },
  { type: 'Suscipicious', cant: 10 },
  { type: 'Harmless', cant: 14 },
  { type: 'No detected', cant: 1 },

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
          <PieSeries
            valueField="cant"
            argumentField="type"
          />
          <Title
            text="Detalle de criticidad de detección"
          />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
