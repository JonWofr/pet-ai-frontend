// Models
import { ContentImage } from './content-image.model';
import { Image } from './image.model';
import { StyleImage } from './style-image.model';

export interface StylizedImage {
  id?: string;
  contentImage: ContentImage;
  styleImage: StyleImage;
  image: Image;
  name: string;
  userId: string | null;
}
