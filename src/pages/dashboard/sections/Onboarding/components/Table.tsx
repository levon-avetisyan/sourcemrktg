import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { ISalesRep } from '../../../../hooks/useSalesReps.ts';

interface IProps {
  data: ISalesRep[];
  loading: boolean;
  setSearchQuery: (query: string) => void;
  setDateRange: (dates: [Date, Date] | null) => void;
  selectedLocation: string;
  setSelectedLocation: (location: string) => void;
  searchQuery: string;
  dateRange: [Date, Date] | null;
  refreshData: () => void;
}

const Table: React.FC<IProps> = ({
  data,
  loading,
  setSelectedLocation,
  selectedLocation,
  setSearchQuery,
  setDateRange,
  searchQuery,
  dateRange,
  // refreshData,
}) => {
  const [rows, setRows] = useState<GridRowsProp>([]);

  const columns: GridColDef[] = [
    { field: 'department_name', headerName: 'Department', width: 150 },
    { field: 'first_name', headerName: 'First Name', width: 150 },
    { field: 'last_name', headerName: 'Last Name', width: 150 },
    { field: 'office_name', headerName: 'Office', width: 150 },
    { field: 'status_name', headerName: 'Status', width: 200 },
    { field: 'manager_name', headerName: 'Manager', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phone', headerName: 'Phone', width: 150 },
    { field: 'signedAt', headerName: 'Signed At', width: 150 },
    { field: 'position_name', headerName: 'Position', width: 150 },
    { field: 'offer_letter_accepted', headerName: 'Onboarded', width: 130, type: 'boolean' },
  ];

  useEffect(() => {
    if (Array.isArray(data)) {
      const formattedData = data.map((rep) => ({
        id: rep.id | rep.sequifiId,
        first_name: rep.first_name,
        last_name: rep.last_name,
        office_name: rep.office_name,
        status_name: rep.status_name,
        manager_name: rep.manager_name,
        email: rep.email,
        phone: rep.phone,
        signedAt: rep.signedAt,
        position_name: rep.position_name,
        offer_letter_accepted: rep.offer_letter_accepted,
        department_name: rep.department_name,
      }));

      setRows(formattedData);
    }
  }, [data]);

  // const filteredRows = rows
  //   .filter((row) => {
  //     const query = searchQuery.toLowerCase();
  //     return row.name.toLowerCase().includes(query) || row.email.toLowerCase().includes(query);
  //   })
  //   .filter((row) => !selectedLocation || row.office === selectedLocation)
  //   .filter((row) => {
  //     if (!dateRange) return true;
  //     const signedAt = new Date(row.signedAt);
  //     return signedAt >= dateRange[0] && signedAt <= dateRange[1];
  //   });

  // const handleRowClick = (params: GridRowParams) => {
  //   const row = filteredRows.find((r) => r.id === params.id) || null;
  // };

  // const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchQuery(event.target.value.toLowerCase());
  // };
  //
  // const handleLocationChange = (value: string) => {
  //   setSelectedLocation(value || '');
  // };
  //
  // const handleDateRangeChange = (dates: [Date, Date] | null) => {
  //   setDateRange(dates);
  // };

  return (
    <div className="dashboard-item">
      {/*<Filters*/}
      {/*  searchQuery={searchQuery}*/}
      {/*  handleSearch={handleSearch}*/}
      {/*  handleLocationChange={handleLocationChange}*/}
      {/*  handleDateRangeChange={handleDateRangeChange}*/}
      {/*/>*/}
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        pagination
        pageSizeOptions={[5, 10, 20]}
        getRowHeight={() => 45}
        rowCount={10}
        paginationMode="server"
        paginationModel={{ page: 1, pageSize: 20 }}
        onPaginationModelChange={(params) => {
          if (params.page !== 0) {
            // setPage(params.page);
          } else {
            // setPage(1);
          }
          // setPageSize(params.pageSize);
        }}
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
    </div>
  );
};

export default Table;
