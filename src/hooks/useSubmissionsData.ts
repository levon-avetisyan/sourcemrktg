import { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';
import { useCustomFieldMapper } from './useCustomFieldMapper';
import { ISubmission } from '../interfaces/submissions';

const desiredKeys = [
  'firstName',
  'lastName',
  'DyLyMnuHyRfPXMHvWqXY', // Inspections attended
  'G0rXTP9kVkyM5y72ubtE', // Time studied today
  'GdT8JAd45mBmgcJfxNPR', // Attended (company)
  'Xhx4ydLYrNUDNclS6g7K', // Completed (company)
  'LqtXrkxu3fI8TVlqJGrW', // Closed (company)
  'mWc5hUsxglivQR4d9ij4', // Closed (self-gen)
  'yEqrmDF3gm0axbSNhpGy', // Completed (self-gen)
  'wY2MpnvLOPD0XOK5tigo', // Attended (self-gen)
  '1VQ1BXgqCjoO1jQr7XHL', // Inspections attended
];

const useSubmissionsData = () => {
  const [data, setData] = useState<ISubmission[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { customFieldMapping, loading: loadingCustomFields } = useCustomFieldMapper();

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await axiosClient.get(`/forms/submissions/`, {
          params: {
            formId: '8qRV1Pdhoy0GHdQ9Plin',
            locationId: import.meta.env.VITE_GHL_LOCATION_ID,
            limit: 100,
          },
        });

        const mappedSubmissions = response.data.submissions.map((submission: ISubmission) => {
          const mappedOthers = Object.fromEntries(
            Object.entries(submission.others)
              .filter(([key]) => desiredKeys.includes(key))
              .map(([key, value]) => {
                if (key === 'firstName') return ['First name', value];
                if (key === 'lastName') return ['Last name', value];
                const mappedKey = customFieldMapping[key] || key;
                return [mappedKey, Number(value)];
              })
          );

          const attended = Number(submission.others['wY2MpnvLOPD0XOK5tigo'] || 0);
          const closed = Number(submission.others['LqtXrkxu3fI8TVlqJGrW'] || 0);
          const closingPercentage = attended > 0 ? (closed / attended) * 100 : 0;

          return { id: submission.id, 'Closing %': closingPercentage, ...mappedOthers };
        });

        setData(mappedSubmissions);
      } catch (err) {
        console.log(err);
        setError('Oops something has happened');
      } finally {
        setLoading(false);
      }
    };

    if (!loadingCustomFields) {
      fetchSubmissions();
    }
  }, [loadingCustomFields, customFieldMapping]);

  return { data, loading, error };
};

export default useSubmissionsData;
