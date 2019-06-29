import React from "react";
import { Field, reduxForm } from "redux-form";
import * as S from "./styles";
import CountryAddInput from "./CountryAddInput.jsx";

const CountryInputForm = ({ handleSubmit, onSubmit }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.CountryAddTitle>새로운 나라 생성 : </S.CountryAddTitle>
      <Field
        name="name"
        type="text"
        component={CountryAddInput}
        placeholder="국가명"
      />
      <Field
        name="alpha2Code"
        type="text"
        component={CountryAddInput}
        placeholder="alpha 2 Code"
      />
      <Field
        name="callingCodes"
        type="number"
        component={CountryAddInput}
        placeholder="국제전화번호"
      />
      <Field
        name="capital"
        type="text"
        component={CountryAddInput}
        placeholder="수도"
      />
      <Field
        name="region"
        type="text"
        component={CountryAddInput}
        placeholder="대륙"
      />
      <S.CountryAddButton type="submit">추가</S.CountryAddButton>
    </form>
  );
};

export default reduxForm({ form: "countryAdd" })(CountryInputForm);
