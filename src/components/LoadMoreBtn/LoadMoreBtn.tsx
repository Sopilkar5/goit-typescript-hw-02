import styles from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn = ({ onClick }: LoadMoreBtnProps) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={onClick}>
        Load More...
      </button>
    </div>
  );
};

export default LoadMoreBtn;