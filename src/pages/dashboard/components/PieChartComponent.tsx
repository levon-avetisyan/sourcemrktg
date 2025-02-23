import { PieChart } from '@mui/x-charts/PieChart';
import { desktopOS, valueFormatter } from './piechart-dataset.ts';

const PieChartComponent = () => {
  return (
    <PieChart
      series={[
        {
          data: desktopOS,
          highlightScope: { fade: 'global', highlight: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          valueFormatter,
        },
      ]}
      height={200}
      width={500}
    />
  );
};
export default PieChartComponent;
