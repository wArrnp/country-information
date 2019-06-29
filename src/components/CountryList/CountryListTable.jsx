import React from "react";
import CountryListHeaderColumn from "./CountryListHeaderColumn.jsx";

import * as S from "./styles";

const CountryListTable = ({ ListItems, onSort }) => {
  return (
    <S.TableWrapper>
      <S.TableRow header>
        <CountryListHeaderColumn
          title="국가명"
          columnName="name"
          onSort={onSort}
        />
        <CountryListHeaderColumn
          title="alpha 2 Code"
          columnName="alpha2Code"
          onSort={onSort}
        />
        <CountryListHeaderColumn
          title="국제전화번호"
          columnName="callingCodes"
          onSort={onSort}
        />
        <CountryListHeaderColumn
          title="수도"
          columnName="capital"
          onSort={onSort}
        />
        <CountryListHeaderColumn
          title="대륙"
          columnName="region"
          onSort={onSort}
        />
        <S.TableColumn>삭제버튼</S.TableColumn>
      </S.TableRow>
      <S.TableBody>{ListItems}</S.TableBody>
    </S.TableWrapper>
  );
};

export default CountryListTable;
