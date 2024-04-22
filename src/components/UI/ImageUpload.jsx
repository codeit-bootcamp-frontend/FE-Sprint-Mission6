import React, { useState } from "react";
import { Label } from "./InputItem";
import styled from "styled-components";
import { ReactComponent as PlusIcon } from "../../assets/images/icons/ic_plus.svg";

const ImageUploadContainer = styled.div`
  display: flex;
  gap: 8px;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    gap: 18px;
  }

  @media ${({ theme }) => theme.mediaQuery.desktop} {
    gap: 24px;
  }
`;

const squareSize = "calc(50% - 4px)";

// file input과 연관 짓기 위해 버튼이 대신 label로 설정
const UploadButton = styled.label`
  background-color: ${({ theme }) => theme.colors.gray[1]};
  color: ${({ theme }) => theme.colors.gray[0]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-radius: 12px;
  font-size: 16px;
  width: ${squareSize};
  max-width: 200px;
  aspect-ratio: 1 / 1; // 정사각형 비율 유지
  cursor: pointer; // 버튼이 아닌 label을 사용한 경우 별도로 추가해 주세요

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[2]};
  }

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    width: 162px;
  }

  @media ${({ theme }) => theme.mediaQuery.desktop} {
    width: 282px;
  }
`;

const ImagePreview = styled.div`
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  width: ${squareSize};
  max-width: 200px;
  aspect-ratio: 1 / 1;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    width: 162px;
  }

  @media ${({ theme }) => theme.mediaQuery.desktop} {
    width: 282px;
  }
`;

// 브라우저 기본 '파일 선택' 버튼 대신 커스텀 버튼을 사용하기 위해 file input을 숨김 처리
const HiddenFileInput = styled.input`
  display: none;
`;

function ImageUpload({ title }) {
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // 미리보기 주소 값(Object URL) 생성
      const imageUrl = URL.createObjectURL(file);
      setImagePreviewUrl(imageUrl);
    }
  };

  return (
    <div>
      {title && <Label>{title}</Label>}

      <ImageUploadContainer>
        {/* HiddenFileInput의 id와 label의 htmlFor 값 매칭 */}
        <UploadButton htmlFor="image-upload">
          <PlusIcon />
          이미지 등록
        </UploadButton>

        <HiddenFileInput
          id="image-upload"
          type="file"
          onChange={handleImageChange}
          accept="image/*" // 이미지 파일만 업로드 가능하도록 제한
        />

        {/* 업로드된 이미지가 있으면 썸네일 렌더링 */}
        {imagePreviewUrl && <ImagePreview src={imagePreviewUrl} />}
      </ImageUploadContainer>
    </div>
  );
}

export default ImageUpload;
