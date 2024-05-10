import { ImageData } from '../ImageGallery/ImageGallery';
import css from './ImageCard.module.css';

type Props = {
  data: ImageData;
  openModal: (data: ImageData | null) => void;
};

const ImageCard = ({ data, openModal }: Props) => {
  return (
    <div className={css.wrapper}>
      <img
        src={data.urls.small}
        alt={data.alt_description}
        onClick={() => openModal(data)}
        className={css.image}
      />
    </div>
  );
};

export default ImageCard;
