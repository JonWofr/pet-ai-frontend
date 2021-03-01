// Models
import { Image } from './image.model';
import { User } from './user';

export interface StyleImage {
  id?: string;
  image: Image;
  name: string;
  artist: string;
  author: User | null;
}
