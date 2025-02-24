import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

const GaugeComponent = () => (
  <Gauge
    value={75}
    startAngle={-110}
    endAngle={110}
    sx={{
      [`& .${gaugeClasses.valueText}`]: {
        fontSize: 40,
        transform: 'translate(0px, 0px)',
      },
    }}
    text={({ value, valueMax }) => `${value} / ${valueMax}`}
  />
);

const settings = {
  width: 200,
  height: 200,
  value: 60,
};

const GaugeComponent2 = () => (
  <Gauge
    {...settings}
    cornerRadius="50%"
    sx={(theme) => ({
      [`& .${gaugeClasses.valueText}`]: {
        fontSize: 40,
      },
      [`& .${gaugeClasses.valueArc}`]: {
        fill: '#52b202',
      },
      [`& .${gaugeClasses.referenceArc}`]: {
        fill: theme.palette.text.disabled,
      },
    })}
  />
);

export { GaugeComponent, GaugeComponent2 };
