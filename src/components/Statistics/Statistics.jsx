import PropTypes from 'prop-types';
import styles from './StatisticsCss.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={styles.statList}>
    <li className={(styles.statItem, styles.itemGood)}>Good: {good} </li>
    <li className={(styles.statItem, styles.itemNeutral)}>
      Natural: {neutral}
    </li>
    <li className={(styles.statItem, styles.itemBad)}>Bad: {bad}</li>
    <li className={(styles.statItem, styles.statItemTotal)}>Total: {total}</li>
    <li className={(styles.statItem, styles.statItemPositive)}>
      Positive feedback: {positivePercentage}%
    </li>
  </ul>
);

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
