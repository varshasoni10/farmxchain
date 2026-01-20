import { format } from 'date-fns';

export const formatDate = (dateString, formatStr = 'MMM d, yyyy') => {
  if (!dateString) return 'N/A';
  try {
    return format(new Date(dateString), formatStr);
  } catch (error) {
    console.error("Error formatting date:", error);
    return 'Invalid Date';
  }
};