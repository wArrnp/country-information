import React from 'react';
import * as S from './styles';

const CountryInputForm = ({
  name,
  alpha2Code,
  callingCodes,
  capital,
  region,
  onChange,
  onSubmit,
}) => {
  return (
    <div>
      <S.CountryAddTitle>새로운 나라 생성 : </S.CountryAddTitle>
      <S.CountryAddInput
        name="name"
        type="input"
        placeholder="국가명"
        value={name}
        onChange={onChange}
      />
      <S.CountryAddInput
        name="alpha2Code"
        type="input"
        placeholder="alpha 2 code"
        value={alpha2Code}
        onChange={onChange}
      />
      <S.CountryAddInput
        name="callingCodes"
        type="number"
        placeholder="국제전화번호"
        value={callingCodes}
        onChange={onChange}
      />
      <S.CountryAddInput
        name="capital"
        type="input"
        placeholder="수도"
        value={capital}
        onChange={onChange}
      />
      <S.CountryAddInput
        name="region"
        type="input"
        placeholder="대륙"
        value={region}
        onChange={onChange}
      />
      <S.CountryAddButton onClick={onSubmit}>추가</S.CountryAddButton>
    </div>
  );
};

export default CountryInputForm;
