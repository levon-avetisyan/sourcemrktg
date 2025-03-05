import { useState } from 'react';
import axiosClient from '../api/axiosClient';
import { IReportData } from '../pages/dashboard/interfaces.ts';

const useSubmitReport = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<unknown>(null);

  const submit = async (data: IReportData) => {
    setLoading(true);

    try {
      const response = await axiosClient.post('/reports/add', data);
      setLoading(false);
      return response;
    } catch (error) {
      setErrors(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading, errors };
};

export default useSubmitReport;
