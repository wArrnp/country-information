import React from 'react';
import * as S from './styles';

const ColumnListHeaderColumn = ({ title, columnName, onSort }) => {
  return (
    <S.TableHeaderColumn>
      {title}
      <S.TableHeaderColumnRight>
        <S.TableHeaderColumnSortButton onClick={() => onSort(columnName, true)}>


          ↑
</S.TableHeaderColumnSortButton>
        <S.TableHeaderColumnSortButton
          onClick={() => onSort(columnName, false)}
        >


          ↓
</S.TableHeaderColumnSortButton>
      </S.TableHeaderColumnRight>
    </S.TableHeaderColumn>
  );
};

export default ColumnListHeaderColumn;
