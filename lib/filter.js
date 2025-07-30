import { parseISO, isAfter, isBefore } from 'date-fns';

export function filterLogs(logs, { level, from, to }) {
  return logs.filter(log => {
    const timestamp = log.timestamp ? parseISO(log.timestamp) : null;
    if (level && log.level !== level) return false;
    if (from && timestamp && isBefore(timestamp, parseISO(from))) return false;
    if (to && timestamp && isAfter(timestamp, parseISO(to))) return false;
    return true;
  });
}
