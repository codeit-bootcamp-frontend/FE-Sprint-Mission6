import React from "react";
import {
  Button,
  Container,
  FlexContainer,
  SectionTitle,
} from "../../styles/CommonStyles";

function AddItemPage() {
  return (
    <Container>
      <FlexContainer>
        <SectionTitle>상품 등록하기</SectionTitle>
        <Button>등록</Button>
      </FlexContainer>
    </Container>
  );
}

export default AddItemPage;
