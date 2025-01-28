import { useState } from 'react';
import axiosClient from '../api/axiosClient';

interface IFormDataSalesReport {
  first_name: string;
  last_name: string;
  appointments_set: number;
  inspections_attended: number;
  time_studied_today: string;
  attended_company: number;
  completed_company: number;
  closed_company: number;
  attended_self_gen: number;
  completed_self_gen: number;
  closed_self_gen: number;
}

const useSubmitSalesReport = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const submit = async (data: IFormDataSalesReport) => {
    const today = new Date().toISOString().split('T')[0];
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    setLoading(true);
    setSuccess(false);

    try {
      const response = await axiosClient.post('/contacts/upsert', {
        firstName: data.first_name,
        lastName: data.last_name,
        locationId: import.meta.env.VITE_GHL_LOCATION_ID,
        timezone: timezone,
        email: 'levon.s.avetisyan@gmail.com',
        customFields: [
          { key: 'appointments_set', field_value: data.appointments_set },
          { key: 'inspections_attended', field_value: data.inspections_attended },
          { key: 'time_studied_today', field_value: data.time_studied_today },
          { key: 'attended_company', field_value: data.attended_company },
          { key: 'completed_company', field_value: data.completed_company },
          { key: 'closed_company', field_value: data.closed_company },
          { key: 'attended_self_gen', field_value: data.attended_self_gen },
          { key: 'completed_self_gen', field_value: data.completed_self_gen },
          { key: 'closed_self_gen', field_value: data.closed_self_gen },
        ],
        tags: ['daily-report', 'sales-rep', today],
      });
      console.log('HighLevel response:', response.data);
      if (response.data.succeeded || response.data.succeded) {
        setSuccess(true);
      }
      return response;
    } catch (error) {
      console.error('Error posting to HighLevel:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading, success };
};

export default useSubmitSalesReport;
