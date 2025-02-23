import React from 'react';
import { Grid2 as Grid } from '@mui/material';
import './DashboardSalesSection.scss';
import Table from './Table.tsx';
import BarChartComponent from './BarChartComponent.tsx';
import PieChartComponent from './PieChartComponent.tsx';
import LineChartComponent from './LineChartComponent.tsx';
import { GaugeComponent, GaugeComponent2 } from './GaugeComponent.tsx';

const DashboardSalesSection: React.FC = () => {
  return (
    <>
      <Grid container spacing={2} style={{ marginBottom: '1rem' }}>
        <Grid size={{ xs: 6, md: 3 }}>
          <div className="dashboard-item total-metric">
            <h6>Total Doors Knocked</h6>
            <h5>200</h5>
          </div>
        </Grid>
        <Grid size={{ xs: 6, md: 3 }}>
          <div className="dashboard-item total-metric">
            <h6>Appointments Completed</h6>
            <h5>100</h5>
          </div>
        </Grid>
        <Grid size={{ xs: 6, md: 3 }}>
          <div className="dashboard-item total-metric">
            <h6>Total Scheduled</h6>
            <h5>200</h5>
            <small>(Self-Gen)</small>
          </div>
        </Grid>
        <Grid size={{ xs: 6, md: 3 }}>
          <div className="dashboard-item total-metric">
            <h6>Total Completed</h6>
            <h5>200</h5>
            <small>(Self-Gen)</small>
          </div>
        </Grid>
      </Grid>

      <Table />
      <Grid container spacing={2} style={{ marginTop: '1rem' }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <div className="dashboard-item chart-item">
            <BarChartComponent />
          </div>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <div className="dashboard-item chart-item">
            <PieChartComponent />
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: '1rem' }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <div className="dashboard-item chart-item">
            <LineChartComponent />
          </div>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <div className="dashboard-item chart-item">
            <GaugeComponent />
          </div>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <div className="dashboard-item chart-item">
            <GaugeComponent2 />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardSalesSection;
