import { useEffect, useState } from 'react';
import axiosClient from '../api/axiosClient';

export interface ISalesRep {
  _id: string;
  sequifiId: string;
  department_name?: string;
  first_name: string;
  last_name: string;
  office_name: string;
  status_name: string;
  manager_name: string;
  email: string;
  phone: string;
  position_name?: string;
  offer_letter_accepted: boolean;
  signedAt?: string;
  createdAt: string;
  updatedAt: string;
}

const useSalesReps = () => {
  const [reps, setReps] = useState<ISalesRep[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSalesReps = async () => {
    try {
      setLoading(true);
      const response = await axiosClient.get('/sales-reps');
      setReps(response.data);
    } catch (err) {
      console.error(err);
      setError('Failed to load sales reps');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSalesReps();
  }, []);

  return { reps, loading, error, fetchSalesReps };
};

export default useSalesReps;
