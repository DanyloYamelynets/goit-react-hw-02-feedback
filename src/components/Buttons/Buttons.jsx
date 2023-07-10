import PropTypes from 'prop-types';
import {
  BtnSection,
  GoodButton,
  NeutralButton,
  BadButton,
  Title,
  StatsTitle,
} from './ButtonsStyled';

const Buttons = ({ goodBtn, neutralBtn, badBtn }) => {
  return (
    <div>
      <Title>Please leave feedback</Title>
      <BtnSection>
        <GoodButton type="button" onClick={goodBtn}>
          Good
        </GoodButton>
        <NeutralButton type="button" onClick={neutralBtn}>
          Neutral
        </NeutralButton>
        <BadButton type="button" onClick={badBtn}>
          Bad
        </BadButton>
      </BtnSection>
      <StatsTitle>Statistics</StatsTitle>
    </div>
  );
};

Buttons.propTypes = {
  goodBtn: PropTypes.func.isRequired,
  neutralBtn: PropTypes.func.isRequired,
  badBtn: PropTypes.func.isRequired,
};

export default Buttons;
