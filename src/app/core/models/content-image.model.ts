// Models
import { Image } from './image.model';

export interface ContentImage {
  id?: string;
  image: Image;
  name: string;
  userId: string | null;
}
