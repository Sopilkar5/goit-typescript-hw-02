import { BeatLoader } from 'react-spinners';
import styles from './Loader.module.css';

interface LoaderProps {
  center?: boolean;
}

const Loader = ({ center = false }: LoaderProps) => {
  return (
    <div className={center ? styles.centeredLoader : styles.loader}>
      <BeatLoader color="#00bcd4" size={15} />
    </div>
  );
};

export default Loader;