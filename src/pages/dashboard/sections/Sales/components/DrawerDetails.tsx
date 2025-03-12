import React from 'react';
import { Card, Descriptions, Drawer, List, Typography } from 'antd';
import { IReportData } from '../../../interfaces.ts';
import {
  APPOINTMENT_OUTCOME,
  INSPECTION_OUTCOME,
  NEGATIVE_OUTCOME_REASON,
} from '../../../enums.ts';
import {
  CalendarOutlined,
  CloseCircleOutlined,
  DollarOutlined,
  HomeOutlined,
  IdcardOutlined,
  UserOutlined,
} from '@ant-design/icons';

interface DrawerDetailsProps {
  selectedRow: IReportData | null;
  isVisible: boolean;
  onClose: () => void;
}

const getOutcomeColor = (outcome: string | undefined): string => {
  if (!outcome) return '#555'; // Default color (grayish)

  const greenOutcomes = ['completed', 'success', 'approved', 'closed', 'completedInspection']; // Example positive cases
  const yellowOutcomes = ['pending', 'rescheduled', 'inProgress']; // Example neutral cases
  const redOutcomes = ['failed', 'canceled', 'notClosed', 'rejected']; // Example negative cases

  if (greenOutcomes.includes(outcome)) return 'green';
  if (yellowOutcomes.includes(outcome)) return 'orange';
  if (redOutcomes.includes(outcome)) return 'red';

  return '#555'; // Default fallback color
};

const InspectionDetails: React.FC<{ item: any }> = ({ item }) => (
  <List.Item
    style={{
      padding: '8px',
      backgroundColor: '#fffbe6',
      border: '1px solid #ffd666',
      borderRadius: '6px',
      marginBottom: '12px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'stretch',
    }}
  >
    <List.Item.Meta
      style={{ width: '100%', marginBottom: '6px' }}
      avatar={<IdcardOutlined style={{ fontSize: '24px' }} />}
      title={<strong style={{ fontSize: '14px' }}>{item.customerName}</strong>}
    />
    <div>
      {item.customerId && (
        <p style={{ margin: '4px 0', color: '#555' }}>
          <strong>
            <UserOutlined /> Customer ID:{' '}
          </strong>
          <span className="value">{item.customerId}</span>
        </p>
      )}
      <p style={{ margin: '4px 0', color: '#555' }}>
        <strong>
          <HomeOutlined /> Appointment:{' '}
        </strong>
        <span className="value" style={{ color: getOutcomeColor(item.appointmentOutcome) }}>
          {APPOINTMENT_OUTCOME[item.appointmentOutcome as keyof typeof APPOINTMENT_OUTCOME]}
        </span>
      </p>
      {item.inspectionOutcome && (
        <p style={{ margin: '4px 0', color: '#555' }}>
          <strong>
            <CalendarOutlined /> Inspection:{' '}
          </strong>
          <span className="value" style={{ color: getOutcomeColor(item.inspectionOutcome) }}>
            {INSPECTION_OUTCOME[item.inspectionOutcome as keyof typeof INSPECTION_OUTCOME]}
          </span>
        </p>
      )}
      {item.inspectionOutcome === 'notClosed' && (
        <p style={{ margin: '4px 0', color: '#555' }}>
          <strong>
            <CloseCircleOutlined /> Reason:
          </strong>{' '}
          <span className="value" style={{ color: getOutcomeColor(item.negativeOutcomeReason) }}>
            {item.negativeOutcomeReason === 'other'
              ? item.otherReasonNegativeOutcome
              : NEGATIVE_OUTCOME_REASON[
                  item.negativeOutcomeReason as keyof typeof NEGATIVE_OUTCOME_REASON
                ]}
          </span>
        </p>
      )}
      {item.inspectionOutcome === 'closed' && (
        <>
          {item.initialInstallCharged && (
            <p style={{ margin: '4px 0', color: '#555' }}>
              <strong>
                <DollarOutlined /> Initial Install Charged:
              </strong>{' '}
              <span className="value" style={{ color: getOutcomeColor(item.closedOption) }}>
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(item.initialInstallCharged || 0)}
              </span>
            </p>
          )}
          {item.monthlyRecurringPayment && (
            <p style={{ margin: '4px 0', color: '#555' }}>
              <strong>
                <DollarOutlined /> Monthly Recurring Payment:
              </strong>{' '}
              <span className="value" style={{ color: getOutcomeColor(item.closedOption) }}>
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(item.monthlyRecurringPayment || 0)}
              </span>
            </p>
          )}
          {item.installDate && (
            <p style={{ margin: '4px 0', color: '#555' }}>
              <strong>
                <CalendarOutlined /> Install Date:
              </strong>{' '}
              <span className="value">{new Date(item.installDate).toLocaleDateString()}</span>
            </p>
          )}
        </>
      )}
    </div>
  </List.Item>
);

const DrawerDetails: React.FC<DrawerDetailsProps> = ({ selectedRow, isVisible, onClose }) => {
  return (
    <Drawer
      title="Report: Details"
      placement="right"
      closable
      onClose={onClose}
      open={isVisible}
      width={400}
    >
      {selectedRow ? (
        <>
          <Descriptions bordered column={1} size="small" style={{ marginBottom: '16px' }}>
            <Descriptions.Item label={<span>First Name</span>}>
              {selectedRow.firstName}
            </Descriptions.Item>
            <Descriptions.Item label={<span>Last Name</span>}>
              {selectedRow.lastName}
            </Descriptions.Item>
            <Descriptions.Item label={<span>Location</span>}>
              {selectedRow.location}
            </Descriptions.Item>
            <Descriptions.Item label={<span>Report Date</span>}>
              {selectedRow.reportDate}
            </Descriptions.Item>
            <Descriptions.Item label={<span>Doors Knocked</span>}>
              {selectedRow.doorsKnocked}
            </Descriptions.Item>
            <Descriptions.Item label={<span>Inspections Scheduled</span>}>
              {selectedRow.inspectionsScheduledCount}
            </Descriptions.Item>
            <Descriptions.Item label={<span>Company Leads Received</span>}>
              {selectedRow.companyLeadsReceivedCount}
            </Descriptions.Item>
          </Descriptions>

          {selectedRow.scheduledInspections?.length > 0 && (
            <Card
              title="Self Gen Inspections"
              size="small"
              styles={{
                body: { padding: '12px 12px 0 12px' },
                header: { background: '#6fa462', color: 'white' },
              }}
            >
              <List
                itemLayout="horizontal"
                dataSource={selectedRow.scheduledInspections}
                size="small"
                renderItem={(inspection) => <InspectionDetails item={inspection} />}
              />
            </Card>
          )}

          {selectedRow.companyLeadsReceived?.length > 0 && (
            <Card
              title="Company Leads Received"
              size="small"
              styles={{
                body: { padding: '12px 12px 0 12px' },
                header: { background: '#2f4d41', color: 'white' },
              }}
              style={{ marginTop: '12px' }}
            >
              <List
                itemLayout="horizontal"
                dataSource={selectedRow.companyLeadsReceived}
                size="small"
                renderItem={(lead) => <InspectionDetails item={lead} />}
              />
            </Card>
          )}
        </>
      ) : (
        <Typography.Text>No report selected</Typography.Text>
      )}
    </Drawer>
  );
};

export default DrawerDetails;
