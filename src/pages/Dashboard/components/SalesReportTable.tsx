import React from 'react';
import { Table } from 'antd';
import useSubmissionsData from '../../../hooks/useSubmissionsData';
import './SalesReportTable.scss';

const SalesReportTable: React.FC = () => {
  const { data: submissionData, loading: loadingSubmissions } = useSubmissionsData();

  console.log('submissionData:', submissionData);

  const columns =
    submissionData && submissionData.length > 0
      ? Object.keys(submissionData[0])
          .filter((key) => key !== 'id')
          .map((key) => {
            const column = {
              title: key.charAt(0).toUpperCase() + key.slice(1),
              dataIndex: key,
              key: key,
              className: 'no-wrap',
              sorter:
                /* eslint-disable @typescript-eslint/no-explicit-any */
                key === 'Closing %' ? (a: any, b: any) => a[key] - b[key] : undefined,
            };

            return column;
          })
      : [];

  return (
    <div style={{ overflowX: 'auto' }}>
      <Table
        dataSource={submissionData}
        columns={columns}
        rowKey={(record) => record.id}
        className="custom-table"
        loading={loadingSubmissions}
      />
    </div>
  );
};

export default SalesReportTable;
