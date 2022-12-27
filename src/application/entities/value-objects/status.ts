/**
 * @param {Status} status
 */
export type Status = 'pending' | 'resolved' | 'rejected';

export function toStatus(status: string): Status {
  switch (status) {
    case 'pending':
      return 'pending';
    case 'resolved':
      return 'resolved';
    case 'rejected':
      return 'rejected';
    default:
      throw new Error('Invalid status');
  }
}
