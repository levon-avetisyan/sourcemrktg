import { useState } from 'react';
import axiosClient from '../api/axiosClient';
import { toast } from 'react-toastify';

interface IFormDataSalesReport {
  reportDate: string;
  location: string;
  first_name: string;
  last_name: string;
  doors_knocked: number;
  inspections_scheduled: number;
  self_gen_scheduled: number;
  self_gen_completed: number;
  self_gen_closed: number;
  company_leads_received: number;
  appointments_completed: number;
  company_leads_closed: number;
  time_studied_today: number;
  hardestObjection?: string;
}

const useSubmitSalesReport = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const submit = async (data: IFormDataSalesReport) => {
    setLoading(true);

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const payload = {
      ...data,
      locationId: import.meta.env.VITE_GHL_LOCATION_ID,
      timezone: timezone,
    };

    try {
      const response = await axiosClient.post('/reports/add', payload);

      if (response?.status === 201) {
        toast('Report submitted successfully');
        setSuccess(true);
      }

      setLoading(false);
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
