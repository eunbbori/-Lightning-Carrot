import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { BsCamera } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import AppButton from "../Button/AppButton";
import {
  addedImgContainer,
  addImgContainer,
  addImgWrapper,
  imgLabelStyle,
} from "./ImageUploadStyle";

const ImageUpload = () => {
  const [showImages, setShowImages] = useState<string[]>([]);
  const handleAddImages = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imageLists = event.target.files;
    let imageUrlLists: string[] = [...showImages];
    if (!imageLists) {
      return;
    }

    for (let i = 0; i < imageLists?.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }
    if (imageUrlLists.length > 11) {
      imageUrlLists = imageUrlLists.slice(0, 11);
    }

    setShowImages(imageUrlLists);
  };

  const handleDeleteImage = (id: number) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };

  return (
    <div css={addImgWrapper}>
      <div css={addImgContainer}>
        <label htmlFor="inputFile" css={imgLabelStyle}>
          <BsCamera className="imgLabelIconStyle" />
          <div className="imgLabelTextStyle">이미지 등록</div>
          <input
            type="file"
            id="inputFile"
            multiple
            onChange={handleAddImages}
            accept="image/jpg,image.png,image/jpeg"
            className="imgInputStyle"
          />
        </label>
      </div>
      {showImages.map((image, id) => (
        <div key={id} css={addedImgContainer}>
          <img src={image} alt={`${image}-${id}`} className="imgStyle" />
          <AppButton
            width={"2.5rem"}
            height={"2.5rem"}
            className={"deleteBtn"}
            type={"button"}
            text={<IoIosClose />}
            onClick={() => handleDeleteImage(id)}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageUpload;
