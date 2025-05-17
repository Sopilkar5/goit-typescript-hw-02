import styles from './ErrorMessage.module.css';

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage = ({ message = 'An error occurred' }: ErrorMessageProps) => (
  <div className={styles.error}>{message}</div>
);

export default ErrorMessage;