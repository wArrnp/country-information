import styled from "styled-components";
import getScrollBar from "../../utils/getScrollBar";

export const TableWrapper = styled.div`
  width: 90vw;
`;

export const TableRow = styled.div`
  display: flex;
  background-color: ${props => {
    return props.header ? "#DDD" : "#FFF";
  }};
  width: ${props =>
    props.header ? `calc(100% - ${getScrollBar()}px)` : "100%"};
  border: 1px solid black;
`;

export const TableColumn = styled.span`
  flex: 1;
  padding: 0.4rem;
  border: 1px solid black;
`;

export const TableBody = styled.div`
  max-height: 70vh;
  overflow-y: scroll;
  overflow-x: hidden;
  border-bottom: 2px solid black;
`;

export const TableDeleteButton = styled.button`
  width: 80%;
  cursor: pointer;
`;

export const TableHeaderColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  padding: 0.4rem;
  border: 1px solid black;
`;

export const TableHeaderColumnRight = styled.div``;

export const TableHeaderColumnSortButton = styled.button`
  cursor: pointer;
`;

export default 123;
