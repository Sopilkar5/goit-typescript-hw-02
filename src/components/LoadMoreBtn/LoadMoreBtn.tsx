import styles from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn = ({ onClick }: LoadMoreBtnProps) => {
  return (
    <button className={styles.loadMore} onClick={onClick}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;