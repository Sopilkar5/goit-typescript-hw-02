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
  return (
    <Modal
      isOpen={isOpen && !!image} // Відкривати модальне вікно лише якщо isOpen true і image існує
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      {image && (
        <div className={styles.modalContent} onClick={onClose}>
          <img
            src={image.urls.regular}
            className={styles.image}
            onClick={(e: React.MouseEvent<HTMLImageElement>) => e.stopPropagation()}
            alt={image.alt_description || 'Image'}
          />
          <div className={styles.info}>
            <p className={styles.author}>
              <strong>Автор:</strong> {image.user.name}
            </p>
            <p className={styles.likes}>
              <strong>Лайки:</strong> {image.likes}
            </p>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;