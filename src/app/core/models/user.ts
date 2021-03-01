// Models
import { Timestamp } from './timestamp.model';

export interface User {
  timestamp: Timestamp;
  lastSeen: Timestamp;
}
