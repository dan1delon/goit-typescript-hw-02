import { ImageData } from '../../images-api';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

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
