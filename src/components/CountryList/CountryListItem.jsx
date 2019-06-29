import React from 'react';
import * as S from './styles';

const CountryListItem = ({
  name,
  alpha2Code,
  callingCodes,
  capital,
  region,
  onDelete,
}) => {
  return (
    <S.TableRow>
      <S.TableColumn>{name}</S.TableColumn>
      <S.TableColumn>{alpha2Code}</S.TableColumn>
      <S.TableColumn>{callingCodes[0]}</S.TableColumn>
      <S.TableColumn>{capital}</S.TableColumn>
      <S.TableColumn>{region}</S.TableColumn>
      <S.TableColumn>
        <S.TableDeleteButton onClick={onDelete}>삭제</S.TableDeleteButton>
      </S.TableColumn>
    </S.TableRow>
  );
};

export default CountryListItem;
