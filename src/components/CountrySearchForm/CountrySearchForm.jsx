import React from 'react';
import * as S from './styles';

const CountrySearchForm = ({ keyword, handleChange }) => {
  return (
    <S.Input
      type="text"
      placeholder="검색어를 입력하세요."
      value={keyword}
      onChange={handleChange}
    />
  );
};

export default CountrySearchForm;
