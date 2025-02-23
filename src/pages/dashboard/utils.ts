// src/utils/formatData.ts
export const formatData = (data: any) => {
  return data.map((item: any) => ({
    ...item,
    reportDate: new Date(item.reportDate).toLocaleDateString(),
    time_studied_today: `${item.time_studied_today} hours`,
    // Add more formatting as needed
  }));
};
