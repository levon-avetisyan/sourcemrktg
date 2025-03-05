import React from 'react';
import { Col, DatePicker, Input, Row, Select } from 'antd';
import { CalendarOutlined, EnvironmentOutlined, SearchOutlined } from '@ant-design/icons';
import { locations } from '../../../../report/constants.ts';

interface FiltersProps {
  searchQuery: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleLocationChange: (value: string) => void;
  handleDateRangeChange: (dates: [Date, Date] | null) => void;
}

const Filters: React.FC<FiltersProps> = ({
  searchQuery,
  handleSearch,
  handleLocationChange,
  handleDateRangeChange,
}) => {
  return (
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
          <Select.Option value="">None</Select.Option>
          {locations?.map((location, index) => (
            <Select.Option key={index} value={location.name}>
              {location.name}
            </Select.Option>
          ))}
        </Select>
      </Col>
      <Col xs={24} sm={12} lg={8}>
        <DatePicker.RangePicker
          onChange={(dates) =>
            handleDateRangeChange(dates ? [dates[0]?.toDate(), dates[1]?.toDate()] : null)
          }
          style={{ width: '100%' }}
          disabledDate={(current) => current && current > new Date()}
          suffixIcon={<CalendarOutlined />}
        />
      </Col>
    </Row>
  );
};

export default Filters;
