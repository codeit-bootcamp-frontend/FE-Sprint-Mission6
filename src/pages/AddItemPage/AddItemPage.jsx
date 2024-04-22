import React, { useState } from "react";
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

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    gap: 24px;
  }
`;

function AddItemPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tag, setTag] = useState("");

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
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="상품명을 입력해 주세요"
          />

          <InputItem
            id="description"
            label="상품 소개"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="상품 소개를 입력해 주세요"
            isTextArea
          />

          <InputItem
            id="price"
            label="판매 가격"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="판매 가격을 입력해 주세요"
          />

          <InputItem
            id="tag"
            label="태그"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            placeholder="태그를 입력해 주세요"
          />
        </InputSection>
      </form>
    </Container>
  );
}

export default AddItemPage;
