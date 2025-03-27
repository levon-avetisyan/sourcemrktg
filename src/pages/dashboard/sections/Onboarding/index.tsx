import React, { useState } from 'react';
import Table from './components/Table.tsx';
import useSalesReps from '../../../../hooks/useSalesReps.ts';

const OnboardingSection: React.FC = () => {
  const { reps, loading, fetchSalesReps } = useSalesReps();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [dateRange, setDateRange] = useState<[Date, Date] | null>(null);

  return (
    <>
      <Table
        data={reps}
        loading={loading}
        setSearchQuery={setSearchQuery}
        setSelectedLocation={setSelectedLocation}
        setDateRange={setDateRange}
        selectedLocation={selectedLocation}
        dateRange={dateRange}
        searchQuery={searchQuery}
        refreshData={fetchSalesReps}
      />
    </>
  );
};

export default OnboardingSection;
