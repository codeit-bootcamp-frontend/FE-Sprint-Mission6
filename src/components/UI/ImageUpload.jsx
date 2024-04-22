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
  aspect-ratio: 1 / 1;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[2]};
  }
`;

const ImagePreview = styled.div`
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  width: ${squareSize};
  aspect-ratio: 1 / 1;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

function ImageUpload({ title }) {
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreviewUrl(imageUrl);
    }
  };

  return (
    <div>
      {title && <Label>{title}</Label>}

      <ImageUploadContainer>
        <UploadButton htmlFor="file-upload">
          <PlusIcon />
          이미지 등록
        </UploadButton>

        <HiddenFileInput
          id="file-upload"
          type="file"
          onChange={handleImageChange}
          accept="image/*" // 이미지 파일만 업로드 가능하도록 제한
        />

        {imagePreviewUrl && <ImagePreview src={imagePreviewUrl} />}
      </ImageUploadContainer>
    </div>
  );
}

export default ImageUpload;
