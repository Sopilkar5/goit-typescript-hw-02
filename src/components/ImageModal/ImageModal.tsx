import React from 'react';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';
import { UnsplashImage } from '../../types';

interface ImageModalProps {
  isOpen: boolean;
  image: UnsplashImage | null;
  onClose: () => void;
}

const ImageModal = ({ isOpen, image, onClose }: ImageModalProps) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
      ariaHideApp={false}
    >
      <div className={styles.modalContent} onClick={onClose}>
        <img
          src={image.urls.regular}
          className={styles.image}
          onClick={(e: React.MouseEvent<HTMLImageElement>) => e.stopPropagation()}
        />
        <div className={styles.info}>
          <p className={styles.author}>
            <strong>Author:</strong> {image.user.name}
          </p>
          <p className={styles.likes}>
            <strong>Likes:</strong> {image.likes}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;