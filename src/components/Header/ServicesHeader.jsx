import React from 'react';
import * as S from './ServicesHeader.style';
import NavBar from '../common/Bar/NavBar';

const ServicesHeader = () => {
  return (
    <S.Header>
      <S.Container>
        <NavBar />
      </S.Container>
    </S.Header>
  );
};

export default ServicesHeader;