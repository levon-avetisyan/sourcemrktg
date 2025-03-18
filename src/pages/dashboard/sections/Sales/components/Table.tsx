import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridRowParams, GridRowsProp } from '@mui/x-data-grid';
import Filters from './Filters.tsx';
import DrawerDetails from './DrawerDetails.tsx';
import { IGetReportDataResponse, IReportData } from '../../../interfaces.ts';

interface IProps {
  data: IGetReportDataResponse;
  loading: boolean;
  setPage: (page: number) => void;
  pageSize: number;
  setPageSize: (pageSize: number) => void;
  setSearchQuery: (query: string) => void;
  setDateRange: (dates: [Date, Date] | null) => void;
  selectedLocation: string;
  setSelectedLocation: (location: string) => void;
  searchQuery: string;
  dateRange: [Date, Date] | null;
}
const Table: React.FC<IProps> = ({
  data,
  loading,
  setPage,
  setPageSize,
  pageSize,
  setSelectedLocation,
  selectedLocation,
  setSearchQuery,
  setDateRange,
  searchQuery,
  dateRange,
}) => {
  const { reports, totalReports, currentPage } = data;
  const [rows, setRows] = useState<GridRowsProp>([]);

  const columns: GridColDef[] = [
    { field: 'reportDate', headerName: 'Report Date', width: 180 },
    { field: 'firstName', headerName: 'First Name', width: 150 },
    { field: 'lastName', headerName: 'Last Name', width: 150 },
    { field: 'location', headerName: 'Location', width: 180 },
    { field: 'appointmentRate', headerName: 'Appointment Rate', width: 150 },
    { field: 'completionRate', headerName: 'Completion Rate', width: 180 },
    { field: 'closeRate', headerName: 'Close Rate', width: 150 },
    { field: 'conversionRate', headerName: 'Total Conversion Rate', width: 180 },
    { field: 'inspectionsScheduledCount', headerName: 'Self Gen Inspections', width: 180 },
    { field: 'companyLeadsReceivedCount', headerName: 'Company Leads Received', width: 200 },
    { field: 'doorsKnocked', headerName: 'Doors Knocked', width: 150 },
  ];

  useEffect(() => {
    if (Array.isArray(reports)) {
      const formattedData = reports.map((report, index) => ({
        id: index + 1,
        firstName: report?.firstName || 'N/A',
        lastName: report?.lastName || 'N/A',
        location: report?.location || 'N/A',
        reportDate: report?.reportDate
          ? new Date(report.reportDate).toLocaleDateString('en-US', {
              month: '2-digit',
              day: '2-digit',
              year: 'numeric',
            })
          : 'N/A',
        doorsKnocked: report?.doorsKnocked ?? 0,
        inspectionsScheduledCount: Array.isArray(report?.scheduledInspections)
          ? report.scheduledInspections.length
          : 0,
        companyLeadsReceivedCount: Array.isArray(report?.companyLeadsReceived)
          ? report.companyLeadsReceived.length
          : 0,
        scheduledInspections: report?.scheduledInspections ?? [], // Include full details for Drawer
        companyLeadsReceived: report?.companyLeadsReceived ?? [],
        appointmentRate: report?.appointmentRate ? `${report.appointmentRate} %` : 'N/A',
        completionRate: report?.completionRate ? `${report.completionRate} %` : 'N/A',
        closeRate: report?.closeRate ? `${report.closeRate} %` : 'N/A',
        conversionRate: report?.conversionRate ? `${report.conversionRate} %` : 'N/A',
      }));

      setRows(formattedData);
    }
  }, [data]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleLocationChange = (value: string) => {
    setSelectedLocation(value || '');
  };

  const handleDateRangeChange = (dates: [Date, Date] | null) => {
    setDateRange(dates);
  };

  const filteredRows = rows
    .filter((row) => {
      const query = searchQuery.toLowerCase();
      return (
        row.firstName.toLowerCase().includes(query) ||
        row.lastName.toLowerCase().includes(query) ||
        row.location.toLowerCase().includes(query)
      );
    })
    .filter((row) => !selectedLocation || row.location === selectedLocation)
    .filter((row) => {
      if (!dateRange) return true;
      const reportDate = new Date(row.reportDate);
      return reportDate >= dateRange[0] && reportDate <= dateRange[1];
    });
  const [selectedRow, setSelectedRow] = useState<IReportData | null>(null);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const handleRowClick = (params: GridRowParams) => {
    const row = filteredRows.find((r) => r.id === params.id) || null;
    setSelectedRow(row);
    setIsDrawerVisible(true);
  };

  return (
    <div className="dashboard-item">
      <Filters
        searchQuery={searchQuery}
        handleSearch={handleSearch}
        handleLocationChange={handleLocationChange}
        handleDateRangeChange={handleDateRangeChange}
      />
      <DataGrid
        rows={filteredRows}
        columns={columns}
        loading={loading}
        pagination
        pageSizeOptions={[5, 10, 20]}
        getRowHeight={() => 45}
        rowCount={totalReports}
        paginationMode="server"
        paginationModel={{ page: currentPage, pageSize }}
        onPaginationModelChange={(params) => {
          if (params.page !== 0) {
            setPage(params.page);
          } else {
            setPage(1);
          }
          setPageSize(params.pageSize);
        }}
        onRowClick={handleRowClick}
        sx={{
          '& .MuiDataGrid-row:hover': {
            cursor: 'pointer',
          },
          '& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-cell:focus': {
            outline: 'none', // Change to your preferred color and size
            outlineOffset: '2px',
          },
        }}
      />
      <DrawerDetails
        selectedRow={selectedRow}
        isVisible={isDrawerVisible}
        onClose={() => setIsDrawerVisible(false)}
      />
    </div>
  );
};

export default Table;
