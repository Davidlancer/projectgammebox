export const getTournamentStatus = (startDate: string, endDate?: string): 'upcoming' | 'ongoing' | 'completed' => {
  const now = new Date();
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : start;

  if (now < start) {
    return 'upcoming';
  } else if (now >= start && now <= end) {
    return 'ongoing';
  } else {
    return 'completed';
  }
};

export const formatDate = (date: string | Date): string => {
  return new Date(date).toLocaleDateString('en-ZA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const formatDateTime = (date: string | Date): string => {
  return new Date(date).toLocaleDateString('en-ZA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const getTimeUntil = (date: string | Date): string => {
  const now = new Date();
  const target = new Date(date);
  const diff = target.getTime() - now.getTime();

  if (diff <= 0) {
    return 'Event has started';
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} remaining`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} remaining`;
  } else {
    return `${minutes} minute${minutes > 1 ? 's' : ''} remaining`;
  }
};

export const isDateInPast = (date: string | Date): boolean => {
  return new Date(date) < new Date();
};

export const isDateToday = (date: string | Date): boolean => {
  const today = new Date();
  const targetDate = new Date(date);
  
  return today.toDateString() === targetDate.toDateString();
};