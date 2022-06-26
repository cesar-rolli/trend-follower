import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import {
  Container,
  Header,
  Left_area,
  Follow_icon,
  Right_area,
  Body,
  Stock_input,
  Search_stock_button,

} from './styles';

const Landing_page: React.FC = () => {
  return (
    <Container>
      <Helmet>
        <title>Trend Follower</title>
      </Helmet>
      <Header>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <Left_area>
            <Follow_icon />
            <h3>Trend follower</h3>
          </Left_area>
        </Link>
        <Right_area>
          {/* <Link to={'/login'} style={{ textDecoration: 'none' }}> */}
            <p>Registre-se</p>
            <p>Login</p>
          {/* </Link> */}
        </Right_area>
      </Header>
      <Body>
        <p>Escolha a ação:</p>
        <Stock_input type='text' placeholder='Código da ação (PETR4)' />
        <Search_stock_button><p>Fazer a consulta</p></Search_stock_button>
      </Body>
    </Container>
  )
}

export default Landing_page;
