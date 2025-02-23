import React from 'react';
import { Input, Select, Row, Col, DatePicker } from 'antd';
import { SearchOutlined, EnvironmentOutlined, CalendarOutlined } from '@ant-design/icons';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { locations } from '../../../components/ReportForm/constants';

interface SalesTableProps {
  searchQuery: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleLocationChange: (value: string) => void;
  handleDateRangeChange: (dates: [Date, Date] | null) => void;
  filteredRows: GridRowsProp;
  columns: GridColDef[];
  loading: boolean;
}

const SalesTable: React.FC<SalesTableProps> = ({
  searchQuery,
  handleSearch,
  handleLocationChange,
  handleDateRangeChange,
  filteredRows,
  columns,
  loading,
}) => {
  return (
    <>
      <Row gutter={[16, 16]} style={{ marginBottom: '1rem' }}>
        <Col xs={24} sm={12} lg={8}>
          <Input
            type="text"
            placeholder="Search by first name, last name, or location"
            value={searchQuery}
            onChange={handleSearch}
            prefix={<SearchOutlined />}
            style={{ width: '100%' }}
          />
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Select
            placeholder="Select office location"
            onChange={handleLocationChange}
            style={{ width: '100%' }}
            allowClear
            suffixIcon={<EnvironmentOutlined />}
          >
            {locations.map((location) => (
              <Select.Option key={location.name} value={location.name}>
                {location.name}
              </Select.Option>
            ))}
          </Select>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <DatePicker.RangePicker
            onChange={(dates) =>
              handleDateRangeChange(dates ? [dates[0]!.toDate(), dates[1]!.toDate()] : null)
            }
            style={{ width: '100%' }}
            suffixIcon={<CalendarOutlined />}
          />
        </Col>
      </Row>
      <DataGrid rows={filteredRows} columns={columns} loading={loading} />
    </>
  );
};

export default SalesTable;
