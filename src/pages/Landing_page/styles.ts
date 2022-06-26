import styled from 'styled-components';

import { FollowTheSigns } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;

  height: 64px;
  width: 100vw;
  background: var(--secondary);

  border-bottom: 1px solid var(--white);
`;

export const Left_area = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > h3 {
    font-size: 20px;
    font-weight: 500;
    color: var(--white);

    margin-left: 8px;
  }
`;

export const Right_area = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  > p {
    font-size: 20px;
    font-weight: bold;
    color: var(--white);
    margin-left: 32px;
  }
`;

export const Follow_icon = styled(FollowTheSigns)`
  width: 32px;
  height: 32px;
  cursor: pointer;

  fill: var(--white);
`;


export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: initial;
  justify-content: center;
  margin-top: 16px;

  > p {
    color: var(--white);
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 8px;
  }
`;

export const Stock_input = styled.input`
  width: 340px;
  height: 34px;

  background: var(--secondary);
  border-radius: 4px;
  color: var(--white-text);

  font-size: 16px;
  padding-left: 8px;

  &::placeholder {
    color: var(--white);
    opacity: 60%;
  }
`;

export const Search_stock_button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 340px;
  height: 40px;
  border-radius: 16px;
  margin-top: 8px;

  background: var(--primary);
  border: 2px solid var(--sinc-light-color);
  cursor: pointer;

  > p {
    color: var(--sinc-light-color);
    font-size: 20px;
    font-weight: 400;
  }

  &:hover {
    background: var(--sinc-button-dark-hover);
  }
`;