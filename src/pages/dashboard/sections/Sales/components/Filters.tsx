import React, { useState } from 'react';
import { Button, Col, DatePicker, Input, Row, Select } from 'antd';
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
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const setToday = () => {
    const today = new Date();
    const startOfDay = new Date(today.setHours(0, 0, 0, 0));
    const endOfDay = new Date(today.setHours(23, 59, 59, 999));
    handleDateRangeChange([startOfDay, endOfDay]);
    setActiveButton('today');
  };

  const setThisWeek = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const startOfWeek = new Date(today.setDate(today.getDate() - dayOfWeek));
    startOfWeek.setHours(0, 0, 0, 0);
    const endOfWeek = new Date(today.setDate(today.getDate() - dayOfWeek + 6));
    endOfWeek.setHours(23, 59, 59, 999);
    handleDateRangeChange([startOfWeek, endOfWeek]);
    setActiveButton('week');
  };

  const setThisMonth = () => {
    const today = new Date();
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    endOfMonth.setHours(23, 59, 59, 999);
    handleDateRangeChange([startOfMonth, endOfMonth]);
    setActiveButton('month');
  };

  const resetDateRange = () => {
    handleDateRangeChange(null);
    setActiveButton(null);
  };

  return (
    <Row gutter={[16, 16]} style={{ marginBottom: '1rem' }}>
      <Col xs={24} sm={12} lg={8}>
        <Input
          type="text"
          placeholder="Search by first name or last name"
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
          <Select.Option value="">All</Select.Option>
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
      <Col xs={24} sm={24} lg={24}>
        <Button
          onClick={setToday}
          type={activeButton === 'today' ? 'primary' : 'default'}
          style={{ marginRight: '8px' }}
        >
          Today
        </Button>
        <Button
          onClick={setThisWeek}
          type={activeButton === 'week' ? 'primary' : 'default'}
          style={{ marginRight: '8px' }}
        >
          This Week
        </Button>
        <Button
          onClick={setThisMonth}
          type={activeButton === 'month' ? 'primary' : 'default'}
          style={{ marginRight: '8px' }}
        >
          This Month
        </Button>
        <Button onClick={resetDateRange}>Reset</Button>
      </Col>
    </Row>
  );
};

export default Filters;
