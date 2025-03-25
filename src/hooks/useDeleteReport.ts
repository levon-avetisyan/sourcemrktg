import { useState } from 'react';
import axiosClient from '../api/axiosClient';
import { toast } from 'react-toastify';

const useDeleteReport = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteReport = async (id: number) => {
    setLoading(true);
    setError(null);
    try {
      await axiosClient.delete(`/reports/${id}`);
      toast.success('Report has been deleted.');
    } catch (err) {
      setError('Failed to delete the report');
    } finally {
      setLoading(false);
    }
  };

  return { deleteReport, loading, error };
};

export default useDeleteReport;
