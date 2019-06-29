import React from "react";

import * as S from "./styles";

const CountryAddInput = ({
  input,
  type,
  placeholder,
  id,
  meta: { touched, error }
}) => {
  return (
    <>
      <S.CountryAddInput
        {...input}
        placeholder={placeholder}
        type={type}
        id={id}
      />
      {touched && error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};
export default CountryAddInput;
