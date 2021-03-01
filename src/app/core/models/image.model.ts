// Models
import { Timestamp } from './timestamp.model';

export interface Image {
  id?: string;
  publicUrl: string;
  filename: string;
  width: number;
  height: number;
  size: number;
  timestamp: Timestamp;
}
