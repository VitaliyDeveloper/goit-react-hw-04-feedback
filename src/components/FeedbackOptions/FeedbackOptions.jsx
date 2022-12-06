import PropTypes from 'prop-types';
import styles from './FeedbackOptionsCss.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={styles.stylesList}>
      {options.map(option => (
        <li className={styles.stylesItem} key={option}>
          <button
            className={styles.feedbackBtn}
            onClick={() => {
              onLeaveFeedback(option);
            }}
            name={option}
            type="button"
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.prototype = {
  option: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
