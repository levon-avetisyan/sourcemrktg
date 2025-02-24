import React, { useState, useEffect } from 'react';
import { GridRowsProp, GridColDef } from '@mui/x-data-grid';
import SalesTable from './SalesTable.tsx';
import { progressFormFields } from '../../../../../components/ReportForm/constants.ts';
import useReports from '../../../../../hooks/useReports.ts';
import { IReport } from '../../../../../interfaces';

const Table: React.FC = () => {
  const { data } = useReports();
  const loading = false;
  const [rows, setRows] = useState<GridRowsProp>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [dateRange, setDateRange] = useState<[Date, Date] | null>(null);

  const columns: GridColDef[] = progressFormFields.map((field) => ({
    field: field.name,
    headerName: field.label,
    width: 180,
  }));

  useEffect(() => {
    if (data) {
      const formattedData = data.map((report: IReport, index: number) => ({
        id: index + 1,
        ...report,
        reportDate: new Date(report.reportDate).toLocaleDateString('en-US', {
          month: '2-digit',
          day: '2-digit',
          year: 'numeric',
        }),
      }));
      setRows(formattedData);
    }
  }, [data]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleLocationChange = (value: string) => {
    setSelectedLocation(value);
  };

  const handleDateRangeChange = (dates: [Date, Date] | null) => {
    setDateRange(dates);
  };

  const filteredRows = rows
    .filter(
      (row) =>
        row.first_name.toLowerCase().includes(searchQuery) ||
        row.last_name.toLowerCase().includes(searchQuery) ||
        row.location.toLowerCase().includes(searchQuery)
    )
    .filter((row) => !selectedLocation || row.location === selectedLocation)
    .filter((row) => {
      if (!dateRange) return true;
      const reportDate = new Date(row.reportDate);
      return reportDate >= dateRange[0]! && reportDate <= dateRange[1]!;
    });

  return (
    <div className="dashboard-item">
      <SalesTable
        searchQuery={searchQuery}
        handleSearch={handleSearch}
        handleLocationChange={handleLocationChange}
        handleDateRangeChange={handleDateRangeChange}
        filteredRows={filteredRows}
        columns={columns}
        loading={loading}
      />
    </div>
  );
};

export default Table;
