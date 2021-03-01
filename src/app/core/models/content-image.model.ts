// Models
import { Image } from './image.model';
import { User } from './user';

export interface ContentImage {
  id?: string;
  image: Image;
  name: string;
  author: User | null;
}
