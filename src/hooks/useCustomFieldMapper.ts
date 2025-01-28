import { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';

export const useCustomFieldMapper = () => {
  const [customFieldMapping, setCustomFieldMapping] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomFields = async () => {
      try {
        const response = await axiosClient.get(
          `/locations/${import.meta.env.VITE_GHL_LOCATION_ID}/customFields/`
        );

        interface CustomField {
          id: string;
          name: string;
        }

        interface CustomFieldResponse {
          customFields: CustomField[];
        }

        const mapping = (response.data as CustomFieldResponse).customFields.reduce(
          (acc: Record<string, string>, field: CustomField) => {
            acc[field.id] = field.name;
            return acc;
          },
          {}
        );

        setCustomFieldMapping(mapping);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchCustomFields();
  }, []);

  return { customFieldMapping, loading };
};
