import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export interface ImageData {
  id: string;
  urls: { small: string; regular: string };
  alt_description: string;
  description: string;
  likes: number;
  user: {
    name: string;
    bio: string;
  };
  links: {
    download: string;
  };
}

interface Props {
  images: ImageData[];
  openModal: (data: ImageData | null) => void;
}

const ImageGallery = ({ images, openModal }: Props) => {
  return (
    <ul className={css.imagesList}>
      {images.length !== 0 &&
        images.map(image => {
          return (
            <li key={image.id} className={css.imagesItem}>
              <ImageCard data={image} openModal={openModal} />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
