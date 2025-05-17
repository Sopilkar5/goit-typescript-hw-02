import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageModal from './components/ImageModal/ImageModal';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import { fetchImages } from './services/unsplashApi';
import { UnsplashImage, UnsplashResponse } from './types';

const App = () => {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<UnsplashImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!query) return;

    const loadImages = async () => {
      setLoading(true);
      try {
        const data: UnsplashResponse | undefined = await fetchImages(query, page);
        if (data) {
          setImages((prev) => [...prev, ...data.results]);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, [query, page]);

  const handleSearch = (newQuery: string): void => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setError(false);
  };

  const handleImageClick = (image: UnsplashImage): void => {
    if (isModalOpen) return;
    setModalImage(image);
    setIsModalOpen(true);
  };

  const handleModalClose = (): void => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message="Не вдалося завантажити зображення. Спробуйте ще раз." />}
      {loading && images.length === 0 && <Loader center />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {loading && images.length > 0 && <Loader />} {/* Без center */}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={() => setPage((p) => p + 1)} />
      )}
      <ImageModal
        isOpen={isModalOpen}
        image={modalImage}
        onClose={handleModalClose}
      />
      <Toaster />
    </>
  );
};

export default App;