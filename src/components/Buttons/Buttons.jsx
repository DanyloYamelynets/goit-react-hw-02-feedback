import PropTypes from 'prop-types';
import {
  BtnSection,
  GoodButton,
  NeutralButton,
  BadButton,
  Title,
  StatsTitle,
} from './ButtonsStyled';

const Buttons = ({ feedbackBtnClick }) => {
  return (
    <div>
      <Title>Please leave feedback</Title>
      <BtnSection>
        <GoodButton type="button" name="good" onClick={feedbackBtnClick}>
          Good
        </GoodButton>
        <NeutralButton type="button" name="neutral" onClick={feedbackBtnClick}>
          Neutral
        </NeutralButton>
        <BadButton type="button" name="bad" onClick={feedbackBtnClick}>
          Bad
        </BadButton>
      </BtnSection>
      <StatsTitle>Statistics</StatsTitle>
    </div>
  );
};

Buttons.propTypes = {
  feedbackBtnClick: PropTypes.func.isRequired,
};

export default Buttons;
