import React, { useState } from 'react';
import Table from './components/Table.tsx';
import useReports from '../../../../hooks/useReports.ts';
import ReportsSummary from './components/ReportsSummary.tsx';

const SalesSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [dateRange, setDateRange] = useState<[Date, Date] | null>(null);
  const { data, loading, setPage, setPageSize, pageSize, fetchReports } = useReports(
    searchQuery,
    selectedLocation,
    dateRange
  );
  return (
    <>
      <ReportsSummary data={data} />
      <Table
        data={data}
        loading={loading}
        setPage={setPage}
        setPageSize={setPageSize}
        pageSize={pageSize}
        setSearchQuery={setSearchQuery}
        setSelectedLocation={setSelectedLocation}
        setDateRange={setDateRange}
        selectedLocation={selectedLocation}
        dateRange={dateRange}
        searchQuery={searchQuery}
        refreshData={fetchReports}
      />
    </>
  );
};

export default SalesSection;
