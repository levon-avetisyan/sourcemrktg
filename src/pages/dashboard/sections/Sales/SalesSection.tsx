import React from 'react';
import { Row, Col, Card } from 'antd';
import Table from './components/Table.tsx';

const SalesSection: React.FC = () => {
  return (
    <>
      <Row gutter={[16, 16]} style={{ marginBottom: '1rem' }}>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <h6>Total Doors Knocked</h6>
            <h5>200</h5>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <h6>Appointments Completed</h6>
            <h5>100</h5>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <h6>
              Total Scheduled <small>(Self-Gen)</small>
            </h6>
            <h5>200</h5>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <h6>
              Total Completed <small>(Self-Gen)</small>
            </h6>
            <h5>200</h5>
          </Card>
        </Col>
      </Row>

      {/* Table Component */}
      <Table />
    </>
  );
};

export default SalesSection;
