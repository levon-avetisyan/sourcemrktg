import { Card, Col, Row } from 'antd';
import {
  CalendarOutlined,
  CheckCircleOutlined,
  ScheduleOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { IGetReportDataResponse } from '../../../interfaces.ts';
import React from 'react';

interface IProps {
  data: IGetReportDataResponse;
}
const ReportsSummary: React.FC<IProps> = ({ data }) => {
  return (
    <div className="dashboard-totals sales">
      <Row gutter={[16, 16]} style={{ marginBottom: '1rem' }}>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <TeamOutlined style={{ fontSize: '24px', marginBottom: '0.5rem', color: '#1890ff' }} />
            <h6 style={{ fontSize: '14px' }}>Total Doors Knocked</h6>
            <h5>{data.totalDoorsKnocked}</h5>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <CalendarOutlined
              style={{ fontSize: '24px', marginBottom: '0.5rem', color: '#52c41a' }}
            />
            <h6 style={{ fontSize: '14px' }}>Appointments Completed</h6>
            <h5>{data.appointmentsCompleted}</h5>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <ScheduleOutlined
              style={{ fontSize: '24px', marginBottom: '0.5rem', color: '#faad14' }}
            />
            <h6 style={{ fontSize: '14px' }}>
              Total Scheduled <small>(Self-Gen)</small>
            </h6>
            <h5>{data.totalScheduled}</h5>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <CheckCircleOutlined
              style={{ fontSize: '24px', marginBottom: '0.5rem', color: '#13c2c2' }}
            />
            <h6 style={{ fontSize: '14px' }}>
              Total Completed <small>(Self-Gen)</small>
            </h6>
            <h5>{data.totalCompleted}</h5>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ReportsSummary;
