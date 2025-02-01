import { useState } from "react";
import "./ImageZoom.scss";
import { CloseButton } from "react-bootstrap";

interface btnProps {
  src: string;
  alt: string;
}

const ImageZoom = ({ src, alt }: btnProps) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const openModal = () => {
    setIsZoomed(true);
  };

  const closeModal = () => {
    setIsZoomed(false);
  };

  return (
    <div className="certBox">
      <img className="certBox__img" src={src} alt={alt} onClick={openModal} />

      {isZoomed && (
        <div className="modalZoom" onClick={closeModal}>
          <div className="modalZoom__content" onClick={(e) => e.stopPropagation()}>
            <img src={src} alt={alt} />
            <CloseButton onClick={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageZoom;
