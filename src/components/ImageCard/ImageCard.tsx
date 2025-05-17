import React from 'react';
import styles from './ImageCard.module.css';
import { UnsplashImage } from '../../types';

interface ImageCardProps {
  image: UnsplashImage;
  onClick: (image: UnsplashImage) => void;
}

const ImageCard = ({ image, onClick }: ImageCardProps) => {
  return (
    <div className={styles.imageCard} onClick={() => onClick(image)}>
      <img src={image.urls.small} alt={image.alt_description || 'Image'} />
    </div>
  );
};

export default ImageCard;