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

function AddItemPage() {
  return (
    <Container>
      <TitleSection>
        <SectionTitle>상품 등록하기</SectionTitle>
        <Button>등록</Button>
      </TitleSection>

      <InputItem
        id="name"
        label="상품명"
        placeholder="상품명을 입력해 주세요"
      />

      <InputItem
        id="price"
        label="판매 가격"
        placeholder="판매 가격을 입력해 주세요"
      />

      <InputItem id="tag" label="태그" placeholder="태그를 입력해 주세요" />
    </Container>
  );
}

export default AddItemPage;
