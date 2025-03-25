import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridRowParams, GridRowsProp } from '@mui/x-data-grid';
import Filters from './Filters.tsx';
import DrawerDetails from './DrawerDetails.tsx';
import { IGetReportDataResponse, IReportData } from '../../../interfaces.ts';
import useDeleteReport from '../../../../../hooks/useDeleteReport.ts';
import { DeleteOutlined } from '@mui/icons-material';
import { Modal } from 'antd';

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
  refreshData: (page: number, pageSize: number) => Promise<void>;
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
  refreshData,
}) => {
  const { reports, totalReports, currentPage } = data;

  const [rows, setRows] = useState<GridRowsProp>([]);

  const columns: GridColDef[] = [
    {
      field: 'actions',
      headerName: 'Actions',
      width: 100,
      style: { textAlign: 'center' },
      renderCell: (params) => (
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: '100%',
            paddingLeft: '10px',
          }}
        >
          <DeleteOutlined
            style={{ cursor: 'pointer', fontSize: '16px' }}
            onClick={(e) => {
              e.stopPropagation();
              confirmDelete(params.id as number);
            }}
          />
        </div>
      ),
    },
    { field: 'reportDate', headerName: 'Report Date', width: 130 },
    { field: 'firstName', headerName: 'First Name', width: 130 },
    { field: 'lastName', headerName: 'Last Name', width: 150 },
    { field: 'location', headerName: 'Location', width: 150 },
    { field: 'installer', headerName: 'Install Partner', width: 130 },
    { field: 'doorsKnocked', headerName: 'Doors Knocked', width: 130 },
    { field: 'appointmentsScheduled', headerName: 'Set Appointments', width: 140 },
    { field: 'inspectionsScheduledCount', headerName: 'Self Gen Appointments', width: 180 },
    {
      field: 'completedSelfGenInspections',
      headerName: 'Self Gen Appointments\n' + '(Completed)',
      width: 280,
    },
    {
      field: 'closedScheduledInspections',
      headerName: 'Self Gen Appointments (Closed)',
      width: 240,
    },
    { field: 'totalCompanyLeadsReceived', headerName: 'Company Leads', width: 140 },
    { field: 'completedCompanyLeads', headerName: 'Company Leads (Completed)', width: 220 },
    { field: 'closedCompanyLeads', headerName: 'Company Leads (Closed)', width: 200 },
  ];

  useEffect(() => {
    if (Array.isArray(reports)) {
      const formattedData = reports.map((report) => ({
        id: report._id,
        firstName: report?.firstName || 'N/A',
        lastName: report?.lastName || 'N/A',
        location: report?.location || 'N/A',
        installer: report?.installer || 'N/A',
        reportDate: report?.reportDate
          ? new Date(report.reportDate).toLocaleDateString('en-US', {
              month: '2-digit',
              day: '2-digit',
              year: 'numeric',
            })
          : 'N/A',
        doorsKnocked: report?.doorsKnocked ?? 0,
        scheduledInspections: report?.scheduledInspections ?? [],
        companyLeadsReceived: report?.companyLeadsReceived ?? [],
        appointmentsScheduled: report?.appointmentsScheduled ?? 'N/A',
        inspectionsScheduledCount: report?.inspectionsScheduledCount ?? 'N/A',
        completedSelfGenInspections: report?.completedSelfGenInspections ?? 'N/A',
        closedScheduledInspections: report?.closedScheduledInspections ?? 'N/A',
        totalCompanyLeadsReceived: report?.totalCompanyLeadsReceived ?? 'N/A',
        completedCompanyLeads: report?.completedCompanyLeads ?? 'N/A',
        closedCompanyLeads: report?.closedCompanyLeads ?? 'N/A',
      }));

      setRows(formattedData);
    }
  }, [data]);

  const { deleteReport, loading: loadingDeleteReport } = useDeleteReport();
  const confirmDelete = (id: number) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this report?',
      content: 'This action cannot be undone.',
      okText: 'Yes, delete it',
      cancelText: 'Cancel',
      okButtonProps: { danger: true, loading: loadingDeleteReport },
      onOk: async () => {
        await deleteReport(id);
        refreshData(currentPage, pageSize);
      },
    });
  };

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
        loading={loading || loadingDeleteReport}
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
