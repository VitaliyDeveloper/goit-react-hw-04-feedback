import PropTypes from 'prop-types';
import styles from './NotificationCss.module.css';

const Notification = ({ message }) => (
  <p className={styles.messageStyle}>{message}</p>
);

Notification.prototype = { message: PropTypes.string.isRequired };

export default Notification;
