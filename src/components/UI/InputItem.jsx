import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  margin-bottom: 16px;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    margin-bottom: 24px;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 12px;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 18px;
  }
`;

const InputField = styled.input`
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.colors.gray[1]};
  color: ${({ theme }) => theme.colors.black};
  border: none;
  border-radius: 12px;
  font-size: 16px;
  line-height: 24px;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[0]};
    font-size: 16px;
    line-height: 24px;
  }

  &:focus {
    outline-color: ${({ theme }) => theme.colors.blue[0]};
  }
`;

function InputItem({ id, label, placeholder }) {
  return (
    <InputContainer>
      <Label htmlFor={id}>{label}</Label>
      <InputField id={id} placeholder={placeholder} />
    </InputContainer>
  );
}

export default InputItem;
