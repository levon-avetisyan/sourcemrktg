import { useEffect, useState } from 'react';
import axiosClient from '../api/axiosClient';
import { IGetReportDataResponse } from '../pages/dashboard/interfaces.ts';

const useReports = (searchQuery = '', location = '', dateRange: [Date, Date] | null = null) => {
  const [data, setData] = useState<IGetReportDataResponse>({
    reports: [],
    currentPage: 0,
    totalPages: 0,
    totalReports: 0,
    totalDoorsKnocked: 0,
    appointmentsCompleted: 0,
    totalScheduled: 0,
    totalCompleted: 0,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  const fetchReports = async (page: number, pageSize: number) => {
    try {
      setLoading(true);
      const response = await axiosClient.get('/reports/all', {
        params: {
          page,
          pageSize,
          searchQuery,
          location,
          startDate: dateRange ? dateRange[0].toISOString() : undefined,
          endDate: dateRange ? dateRange[1].toISOString() : undefined,
        },
      });
      setData({ ...response.data });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError('Oops something has happened');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports(page, pageSize);
  }, [page, pageSize, searchQuery, location, dateRange]);

  return { data, loading, error, setPage, setPageSize, pageSize, page, fetchReports };
};

export default useReports;
