import { useState } from 'react';
import axiosClient from '../api/axiosClient';
import { transformReportData } from '../pages/report/utiils.ts';
import { IFormData } from '../pages/report/interfaces.ts';
import { locationId } from '../constants';
import { toast } from 'react-toastify';

const useSubmitReport = () => {
  const [loading, setLoading] = useState(false);

  const submit = async (formData: IFormData) => {
    const payload = transformReportData(formData);
    setLoading(true);

    try {
      const response = await axiosClient.post('/reports/add', {
        ...payload,
        locationId,
      });
      setLoading(false);
      return response;
    } catch (error) {
      if (error?.response?.data?.errors) {
        // Extract validation errors from response
        const validationErrors = error.response.data.errors;

        // Get the first validation error message
        const firstError =
          Object.values(validationErrors)[0]?.message || 'An unexpected error occurred';

        // Display error notification
        toast.error(`Validation Error: ${firstError}`);
      } else {
        // General error fallback
        toast.error('An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading };
};

export default useSubmitReport;
