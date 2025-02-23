import { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';

const useReports = () => {
  const [data, setData] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const fetchReports = async () => {
    try {
      setLoading(true);
      const response = await axiosClient.get('/reports/all');
      setData(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError('Oops something has happened');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  return { data, loading, error };
};

export default useReports;
