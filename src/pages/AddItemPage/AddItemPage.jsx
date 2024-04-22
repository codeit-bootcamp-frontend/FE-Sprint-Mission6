import React from "react";
import {
  Button,
  Container,
  FlexContainer,
  SectionTitle,
} from "../../styles/CommonStyles";
import styled from "styled-components";
import InputItem from "../../components/UI/InputItem";

const TitleSection = styled(FlexContainer)`
  margin-bottom: 16px;
`;

const InputSection = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    gap: 24px;
  }
`;

function AddItemPage() {
  return (
    <Container>
      <form>
        <TitleSection>
          <SectionTitle>상품 등록하기</SectionTitle>
          <Button type="submit">등록</Button>
        </TitleSection>

        <InputSection>
          <InputItem
            id="name"
            label="상품명"
            placeholder="상품명을 입력해 주세요"
          />

          <InputItem
            id="description"
            label="상품 소개"
            placeholder="상품 소개를 입력해 주세요"
            isTextArea
          />

          <InputItem
            id="price"
            label="판매 가격"
            placeholder="판매 가격을 입력해 주세요"
          />

          <InputItem id="tag" label="태그" placeholder="태그를 입력해 주세요" />
        </InputSection>
      </form>
    </Container>
  );
}

export default AddItemPage;
