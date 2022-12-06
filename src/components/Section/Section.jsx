import PropTypes from 'prop-types';
import styles from './SectionCss.module.css';

const Section = ({ title, children }) => (
  <section className={styles.titleSection}>
    {title && <h2 className={styles.title}>{title}</h2>}
    {children}
  </section>
);

Section.prototype = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default Section;
