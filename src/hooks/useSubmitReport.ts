import { useState } from 'react';
import axiosClient from '../api/axiosClient';
import { transformReportData } from '../pages/report/utiils.ts';
import { IFormData } from '../pages/report/interfaces.ts';
import { locationId } from '../constants';

const useSubmitReport = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<unknown>(null);

  const submit = async (formData: IFormData) => {
    const payload = transformReportData(formData);
    console.log('payload', payload);
    setLoading(true);

    try {
      const response = await axiosClient.post('/reports/add', {
        ...payload,
        locationId,
      });
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
