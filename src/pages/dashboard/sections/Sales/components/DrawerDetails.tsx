import React from 'react';
import { Card, Descriptions, Drawer, List, Typography } from 'antd';
import { IReportData } from '../../../interfaces.ts';
import {
  APPOINTMENT_OUTCOME,
  INSPECTION_OUTCOME,
  NEGATIVE_OUTCOME_REASON,
  POSITIVE_OUTCOME_TYPE,
} from '../../../enums.ts';
import {
  CalendarOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  HomeOutlined,
  UserOutlined,
} from '@ant-design/icons';

interface DrawerDetailsProps {
  selectedRow: IReportData | null;
  isVisible: boolean;
  onClose: () => void;
}

const InspectionDetails: React.FC<{ item: any }> = ({ item }) => (
  <List.Item
    style={{
      padding: '6px 8px',
      backgroundColor: '#f9f9f9',
      borderRadius: '4px',
      marginBottom: '8px',
    }}
  >
    <List.Item.Meta
      avatar={<UserOutlined />}
      title={<strong style={{ fontSize: '14px' }}>{item.customerName}</strong>}
      description={
        <>
          {item.customerId && (
            <p style={{ margin: '4px 0', color: '#555' }}>
              <strong>
                <UserOutlined /> Customer ID:{' '}
              </strong>
              {item.customerId}
            </p>
          )}
          <p style={{ margin: '4px 0', color: '#555' }}>
            <strong>
              <HomeOutlined /> Appointment:{' '}
            </strong>
            {APPOINTMENT_OUTCOME[item.appointmentOutcome as keyof typeof APPOINTMENT_OUTCOME]}
          </p>
          {item.inspectionOutcome && (
            <p style={{ margin: '4px 0', color: '#555' }}>
              <strong>
                <CalendarOutlined /> Inspection:{' '}
              </strong>
              {INSPECTION_OUTCOME[item.inspectionOutcome as keyof typeof INSPECTION_OUTCOME]}
            </p>
          )}
          {item.inspectionOutcome === 'notClosed' && (
            <p style={{ margin: '4px 0', color: '#555' }}>
              <strong>
                <CloseCircleOutlined /> Reason:
              </strong>{' '}
              {item.negativeOutcomeReason === 'other'
                ? item.otherReasonNegativeOutcome
                : NEGATIVE_OUTCOME_REASON[
                    item.negativeOutcomeReason as keyof typeof NEGATIVE_OUTCOME_REASON
                  ]}
            </p>
          )}
          {item.inspectionOutcome === 'closed' && (
            <>
              <p style={{ margin: '4px 0', color: '#555' }}>
                <strong>
                  <CloseCircleOutlined /> Closed With:
                </strong>{' '}
                {item.closedOption === 'scheduledInstallDate'
                  ? POSITIVE_OUTCOME_TYPE[item.closedOption as keyof typeof POSITIVE_OUTCOME_TYPE]
                  : POSITIVE_OUTCOME_TYPE[item.closedOption as keyof typeof POSITIVE_OUTCOME_TYPE]}
              </p>
              {item.closedOption === 'scheduledInstallDate' && item.installDate && (
                <p style={{ margin: '4px 0', color: '#555' }}>
                  <strong>
                    <CalendarOutlined /> Install Date:
                  </strong>{' '}
                  {new Date(item.installDate).toLocaleDateString()}
                </p>
              )}
            </>
          )}
        </>
      }
    />
  </List.Item>
);

const DrawerDetails: React.FC<DrawerDetailsProps> = ({ selectedRow, isVisible, onClose }) => {
  return (
    <Drawer
      title="Details of the Report"
      placement="right"
      closable
      onClose={onClose}
      open={isVisible}
      width={400}
    >
      {selectedRow ? (
        <>
          <Descriptions bordered column={1} size="small" style={{ marginBottom: '16px' }}>
            <Descriptions.Item
              label={
                <span>
                  <UserOutlined /> First Name
                </span>
              }
            >
              {selectedRow.firstName}
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <span>
                  <UserOutlined /> Last Name
                </span>
              }
            >
              {selectedRow.lastName}
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <span>
                  <HomeOutlined /> Location
                </span>
              }
            >
              {selectedRow.location}
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <span>
                  <CalendarOutlined /> Report Date
                </span>
              }
            >
              {selectedRow.reportDate}
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <span>
                  <CalendarOutlined /> Doors Knocked
                </span>
              }
            >
              {selectedRow.doorsKnocked}
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <span>
                  <CalendarOutlined /> Inspections Scheduled
                </span>
              }
            >
              {selectedRow.inspectionsScheduledCount}
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <span>
                  <CheckCircleOutlined /> Company Leads Received
                </span>
              }
            >
              {selectedRow.companyLeadsReceivedCount}
            </Descriptions.Item>
          </Descriptions>

          {selectedRow.scheduledInspections?.length > 0 && (
            <Card
              title="Scheduled Inspections"
              size="small"
              styles={{
                body: { padding: '20px' },
                wrapper: { marginTop: '12px', padding: '8px' },
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
              style={{ marginTop: '12px', padding: '8px' }}
              bodyStyle={{ padding: '12px' }}
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
