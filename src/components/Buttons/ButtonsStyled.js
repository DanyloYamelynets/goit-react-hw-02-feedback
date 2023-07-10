import styled from 'styled-components';

export const BtnSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 20px;
  margin-left: 20px;
`;
export const Title = styled.h2`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 20px;
  margin-left: 15px;
`;
export const GoodButton = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid #003810bd;
  background-color: #ddf2e2;
  font-size: 15px;
  font-weight: 700;
  color: #0b4500;
  transition: 250ms;
  &:hover,
  &:focus {
    background-color: #016615;
    color: white;
    transition: 250ms;
  }
`;
export const NeutralButton = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid #005c84bd;
  background-color: #ddeefd;
  font-size: 15px;
  font-weight: 700;
  color: #01155b;
  transition: 250ms;
  &:hover,
  &:focus {
    background-color: #0051ab;
    color: white;
    transition: 250ms;
  }
`;
export const BadButton = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid #710101ba;
  background-color: #fce3e3;
  font-size: 15px;
  font-weight: 700;
  color: #450000;
  transition: 250ms;
  &:hover,
  &:focus {
    background-color: #7c0000;
    color: white;
    transition: 250ms;
  }
`;
export const StatsTitle = styled.h2`
  font-size: 30px;
  font-weight: 500;
  margin-left: 15px;
`;
