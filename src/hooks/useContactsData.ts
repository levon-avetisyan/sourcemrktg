import { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';
// import { useCustomFieldMapper } from './useCustomFieldMapper';

interface ICustomFields {
  [key: string]: string | number | null;
}

interface IContact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  customFields: ICustomFields;
}

const useContactsData = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  // const { mapContactCustomFields } = useCustomFieldMapper();

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axiosClient.get('/api/contacts/', {
          params: {
            locationId: import.meta.env.VITE_GHL_LOCATION_ID,
            limit: 100,
            page: 1,
            query: 'Levon',
          },
        });
        console.log('unmapped: ', response.data);
        // const mappedContacts: IContact[] = response.data.contacts.map(mapContactCustomFields);
        setContacts(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  return { contacts, loading };
};

export default useContactsData;
