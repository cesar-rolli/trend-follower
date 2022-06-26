import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import {
  Container,
} from './styles';

const Landing_page: React.FC = () => {
  return (
    <Container>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <p>login</p>
    </Container>
  )
}

export default Landing_page;
