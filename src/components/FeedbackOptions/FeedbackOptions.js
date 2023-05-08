import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  
  return (
    <div className={css.buttons}>
      <button type="button" onClick={onLeaveFeedback} className={css.btn} name="good">good</button>
      <button type="button" onClick={onLeaveFeedback} className={css.btn} name="neutral">neutral</button>
      <button type="button" onClick={onLeaveFeedback} className={css.btn} name="bad">bad</button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.objectOf(PropTypes.number.isRequired),
};
